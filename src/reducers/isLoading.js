import * as Types from '../constants/ActionTypes';
let initialState = true;
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_ISLOADING:
            state = false;
            return state;
        default: 
            return state;
    }
};
export default myReducer;