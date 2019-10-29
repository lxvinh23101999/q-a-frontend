import * as Types from '../constants/ActionTypes';
let initialState = {
    keyWord: ""
};
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH_QUESTION:
            let { keyWord } = action;
            state.keyWord = keyWord;
            return state;
        default:
            return state;
    }
};

export default myReducer;