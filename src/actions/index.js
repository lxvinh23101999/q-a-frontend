import * as Types from './../constants/ActionTypes';
export const addSession = (session) => {
    return {
        type: Types.ADD_SESSION,
        session
    }
}
export const searchSession = (keyWord) => {
    return {
        type: Types.SEARCH_SESSION,
        keyWord
    }
}
export const searchQuestion = (keyWord) => {
    return {
        type: Types.SEARCH_QUESTION,
        keyWord
    }
}
export const changeIsDisplayAnswer = (index) => {
    return {
        type: Types.CHANGE_ISDISPLAYANSWER,
        index
    }
}
export const changeIsDisplayScrollToTopButton = () => {
    return {
        type: Types.CHANGE_ISDISPLAYSCROLLTOTOPBUTTON
    }
}