import * as Types from './../constants/ActionTypes';
import _ from 'lodash';
let initialState = [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SURVEYQUESTIONS_BY_SURVEYID:
            state = action.surveyQuestions;
            return [...state];
        case Types.ADD_SURVEYQUESTION:
            state = [...state, action.surveyQuestion];
            return [...state];
        case Types.DELETE_SURVEYQUESTION:
            _.remove(state, surveyQuestion => {
                return surveyQuestion.id === action.id;
            });
            return [...state];
        case Types.VOTE_SURVEY:
            let { data, userInfo } = action;
            for (let i=0; i<data.length; i++) {
                let surveyQuestionId = parseInt(data[i].surveyQuestionId);
                let selectionId = parseInt(data[i].selectionId);
                let indexQuestion = _.findIndex(state, function (item) { return item.id === surveyQuestionId; });
                if (indexQuestion !== -1) state[indexQuestion].isResponded = true;
                let indexSelection = _.findIndex(state[indexQuestion].selections, function (item) { return item.id === selectionId; });
                if (indexSelection !== -1) {
                    state[indexQuestion].selections[indexSelection].isChecked = true;
                    if (state[indexQuestion].selections[indexSelection].voteUsers) {
                        state[indexQuestion].selections[indexSelection].voteUsers.push(userInfo.id);
                    }
                    else {
                        state[indexQuestion].selections[indexSelection].voteUsers = [userInfo.id];
                    }
                } 
            }
            return [...state];
        default:
            return [...state];
    }
};

export default myReducer;