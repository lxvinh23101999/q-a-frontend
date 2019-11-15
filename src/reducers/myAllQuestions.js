import * as Types from './../constants/ActionTypes';
let initialState = [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_MYALLQUESTIONS:
            state = action.questions;
            return [...state];
        default:
            return [...state];
    }
};

export default myReducer;