import * as Types from './../constants/ActionTypes';
let initialState = {};
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SESSION_BY_ID: 
            // console.log(action.session);
            state = action.session;
            return state;
        default:
            return state;
    }
};

export default myReducer;