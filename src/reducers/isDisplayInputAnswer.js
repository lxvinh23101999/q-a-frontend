import * as Types from '../constants/ActionTypes';
let initialState = [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_ISDISPLAYINPUTANSWER:
            let {questionId} = action;
            state[questionId] = !state[questionId];
            return [...state];
        default: 
            return [...state];
    }
};
export default myReducer;