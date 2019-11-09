import * as Types from '../constants/ActionTypes';
let initialState = {};
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_ISDISPLAYEDITANSWERINPUT:
            let { answerId } = action;
            state = {
                answerId: answerId
            }
            return { ...state };
        case Types.RESET_ISDISPLAYEDITANSWERINPUT:
            state = {};
            return { ...state };
        default:
            return { ...state };
    }
};
export default myReducer;