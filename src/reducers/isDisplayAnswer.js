import * as Types from '../constants/ActionTypes';
let length = JSON.parse(localStorage.getItem("questions")).length;
let initialState = [];
for (let i=1;i<=length;i++) {
    initialState.push(false);
}
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