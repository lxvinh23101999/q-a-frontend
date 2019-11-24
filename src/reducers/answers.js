import * as Types from './../constants/ActionTypes';
import _ from 'lodash';
let initialState = [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ANSWERS_BY_QUESTIONID:
            let arr = _.orderBy(action.data, o => o.likeUsers.length, "desc");
            let payload = {
                questionId: action.questionId,
                answers: arr,
                isDisplayHideAnswerButton: true,
            }
            let fetchIndex = _.findIndex(state, function (item) { return item.questionId === action.questionId; });
            if (fetchIndex === -1) {
                state.push(payload);
            }
            else {
                state[fetchIndex].answers = payload.answers;
                state[fetchIndex].isDisplayHideAnswerButton = payload.isDisplayHideAnswerButton;
            }
            return [...state];
        case Types.HIDE_ANSWERSOFQUESTION:
            let hideIndex = _.findIndex(state, function (item) { return item.questionId === action.questionId; });
            if (hideIndex === -1) {
                console.log('Chưa hiển thị câu hỏi');
            }
            else {
                _.remove(state, (item) => {
                    return item.questionId === action.questionId;
                });
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
                    answers: answers,
                }
                state.unshift(payload);
            }
            else state[addIndex].answers.unshift(answer);
            return [...state];
        case Types.DELETE_ANSWER:
            let answerId = action.answerId;
            let questionId = parseInt(action.questionId);
            let deleteIndex = _.findIndex(state, function (item) { return item.questionId === questionId; });
            _.remove(state[deleteIndex].answers, answer => {
                return answer.id === answerId;
            });
            return [...state];
        case Types.EDIT_ANSWER:
            let editIndex = _.findIndex(state, function (item) { return item.questionId === parseInt(action.answer.questionId); });
            let editAnswerIndex = _.findIndex(state[editIndex].answers, function (item) { return item.id === parseInt(action.answer.id); });
            state[editIndex].answers[editAnswerIndex].contentAnswer = action.answer.contentAnswer;
            state[editIndex].answers[editAnswerIndex].updatedAt = action.answer.updatedAt;
            return [...state];
        case Types.LIKE_ANSWER:
            let questionIndex = _.findIndex(state, function (item) { return item.questionId === action.questionId; });
            let likeIndex = _.findIndex(state[questionIndex].answers, function (item) { return item.id === action.answerId; });
            if (state[questionIndex].answers[likeIndex].isLiked) {
                state[questionIndex].answers[likeIndex].isLiked = false;
                state[questionIndex].answers[likeIndex].likeUsers.pop();
            }
            else {
                state[questionIndex].answers[likeIndex].isLiked = true;
                if (!state[questionIndex].answers[likeIndex].likeUsers) {
                    state[questionIndex].answers[likeIndex].likeUsers = [];
                }
                state[questionIndex].answers[likeIndex].likeUsers.push(-1);
            }
            return [...state];
        default:
            return [...state];
    }
};

export default myReducer;