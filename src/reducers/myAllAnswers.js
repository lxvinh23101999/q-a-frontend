import * as Types from './../constants/ActionTypes';
// import _ from 'lodash';
let initialState = [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_MYALLANSWERS:
            state = action.answers;
            return [...state];
        default:
            return [...state];
    }
};

export default myReducer;