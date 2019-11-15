import * as Types from '../constants/ActionTypes';
let initialState = "all"
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FILTER_SESSION:
            state = action.by;
            return state;
        default:
            return state;
    }
};

export default myReducer;