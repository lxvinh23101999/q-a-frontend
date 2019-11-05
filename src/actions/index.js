import * as Types from './../constants/ActionTypes';
import callApi from './../helpers/apiCaller';
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
export const actFetchSessionsRequest = () => {
    return dispatch => {
        return callApi('sessions/list', 'GET', null).then(res => {
            dispatch(actFetchSessions(res.data));
        }).catch(err => {
            console.log(err.response.data);
        });
    };
}
export const actFetchSessions = (sessions) => {
    return {
        type : Types.FETCH_SESSIONS,
        sessions
    }
}
export const actFetchSessionByIdRequest = (id) => {
    return dispatch => {
        return callApi(`sessions/getbyid/${id}`, 'GET', null).then(res => {
            dispatch(actFetchSessionById(res.data));
        });
    };
}
export const actFetchSessionById = (session) => {
    return {
        type : Types.FETCH_SESSION_BY_ID,
        session
    }
}
export const actLoginRequest = (loginInfo) => {
    return () => {
        return callApi(`users/login`, 'POST',{"username": loginInfo.username, "password": loginInfo.password}).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err.response.data);
        });
    };
}
export const actAddSessionRequest = (sessionInfo) => {
    return dispatch => {
        return callApi('sessions/create', 'POST', sessionInfo).then(res => {
            dispatch(actAddSession(res.data));
        }).catch(err => {
            console.log(err.response.data);
        });
    };
}
export const actAddSession = (data) => {
    return {
        type : Types.ADD_SESSION,
        data
    }
}
export const actAddQuestionRequest = (questionInfo) => {
    return dispatch => {
        return callApi('questions/create', 'POST', questionInfo).then(res => {
            dispatch(actAddQuestion(res.data));
        }).catch(err => {
            console.log(err.response.data);
        });
    };
}
export const actAddQuestion = (data) => {
    return {
        type : Types.ADD_QUESTION,
        data
    }
}
export const actDeleteSessionRequest = (id) => {
    return dispatch => {
        return callApi(`sessions/delete/${id}`, 'DELETE', null).then(res => {
            console.log(res.data);
            dispatch(actDeleteSession(id));
        }).catch(err => {
            console.log(err);
        });
    };
}
export const actDeleteSession = (id) => {
    return {
        type : Types.DELETE_SESSION,
        id
    }
}
