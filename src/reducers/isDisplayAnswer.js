import * as Types from '../constants/ActionTypes';
let initialState = [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_ISDISPLAYANSWER:
            let {index} = action;
            state[index-1] = !state[index-1];
            return [...state];
        default: 
            return [...state];
    }
};
export default myReducer;