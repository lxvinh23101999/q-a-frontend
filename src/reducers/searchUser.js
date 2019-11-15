import * as Types from '../constants/ActionTypes';
let initialState = {
    name: "",
    userName: "",
    createdDate: "",
    role: "all"
};
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH_USER:
            let { keyWord } = action;
            state = keyWord;
            return { ...state };
        default:
            return { ...state };
    }
};

export default myReducer;