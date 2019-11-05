import * as Types from './../constants/ActionTypes';
let initialState = {};
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SESSION_BY_ID: 
            state = action.session;
            return {...state};
        case Types.ADD_QUESTION:
            let question = {
                id: action.data.question.id,
                contentQuestion: action.data.question.contentQuestion,
                sessionId: action.data.question.sessionId,
                owner: action.data.question.owner,
                createdAt: action.data.question.createdAt,
                nameOfOwner: action.data.nameOfOwner,
                numberOfAnswers: 0
            }
            state.questions.push(question);
            return {...state};
        default:
            return {...state};
    }
};

export default myReducer;