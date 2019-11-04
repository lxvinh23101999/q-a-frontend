import * as Types from './../constants/ActionTypes';
import callApi from './../helpers/apiCaller';
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
export const actFetchSessionsRequest = () => {
    return dispatch => {
        return callApi('sessions/list', 'GET', null).then(res => {
            dispatch(actFetchSessions(res.data));
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
        return callApi(`sessions/${id}`, 'GET', null).then(res => {
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
            console.log(res);
        }).catch(err => {
            console.log(err.response.data);
        });
    };
}
