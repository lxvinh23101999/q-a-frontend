import * as Types from './../constants/ActionTypes';
import _ from 'lodash';
let initialState = [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ANSWERS_BY_QUESTIONID: 
            let payload = {
                questionId: action.questionId,
                answers: action.data
            }
            let fetchIndex = _.findIndex(state, function (item) { return item.questionId === action.questionId; });
            if (fetchIndex === -1) {
                state.push(payload);
            }
            else {
                state[fetchIndex].answers = payload.answers;
            }
            return [...state];
        case Types.ADD_ANSWER:
            let answer = {
                ...action.data.answer,
                nameOfOwner: action.data.nameOfOwner,
                deletePermission: true,
                editPermission: true
            }
            let addIndex = _.findIndex(state, function (item) { return item.questionId === parseInt(answer.questionId); });
            if (addIndex === -1) {
                let answers = [answer];
                let payload = {
                    questionId: parseInt(answer.questionId),
                    answers: answers
                }
                state.push(payload);
            }
            else state[addIndex].answers.push(answer);
            return [...state];
        case Types.DELETE_ANSWER:
            let answerId = action.answerId;
            let questionId = parseInt(action.questionId);
            let deleteIndex = _.findIndex(state, function(item) { return item.questionId === questionId; });
            _.remove(state[deleteIndex].answers, answer => {
                return answer.id === answerId;
            });
            return [...state];
        case Types.EDIT_ANSWER:
            let editIndex = _.findIndex(state, function(item) { return item.questionId === parseInt(action.answer.questionId); });
            let editAnswerIndex = _.findIndex(state[editIndex].answers, function(item) { return item.id === parseInt(action.answer.id); });
            state[editIndex].answers[editAnswerIndex].contentAnswer = action.answer.contentAnswer;
            state[editIndex].answers[editAnswerIndex].updatedAt = action.answer.updatedAt;
            return [...state];    
        default:
            return [...state];
    }
};

export default myReducer;