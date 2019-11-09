import * as Types from './../constants/ActionTypes';
import _ from 'lodash';
let initialState = {};
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SESSION_BY_ID:
            state = action.session;
            return { ...state };
        case Types.ADD_QUESTION:
            let question = {
                id: action.data.question.id,
                contentQuestion: action.data.question.contentQuestion,
                sessionId: action.data.question.sessionId,
                owner: action.data.question.owner,
                createdAt: action.data.question.createdAt,
                nameOfOwner: action.data.nameOfOwner,
                numberOfAnswers: 0,
                deletePermission: true
            }
            state.questions.push(question);
            return { ...state };
        case Types.DELETE_QUESTION:
            let questionId = action.id;
            _.remove(state.questions, question => {
                return question.id === questionId;
            });
            return { ...state };
        case Types.UPDATE_NUMBEROFANSWERS:
            let actionName = action.actionName;
            action.questionId = typeof action.questionId !== 'number' ? parseInt(action.questionId) : action.questionId;
            let questionIndex = _.findIndex(state.questions, function(item) { return item.id === action.questionId; });
            if (actionName === "addAnswer") {
                state.questions[questionIndex].numberOfAnswers ++;
            }
            else if (actionName === "deleteAnswer") {
                state.questions[questionIndex].numberOfAnswers --;
            }
            return { ...state };
        default:
            return { ...state };
    }
};

export default myReducer;