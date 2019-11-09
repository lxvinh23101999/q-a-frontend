import * as Types from './../constants/ActionTypes';
import callApi from './../helpers/apiCaller';
import Swal from 'sweetalert2';
export const actLoginRequest = (loginInfo) => {
    return dispatch => {
        return callApi(`users/login`, 'POST', { "username": loginInfo.username, "password": loginInfo.password }).then(res => {
            console.log(res.data);
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${err.response.data}`,
            })
        });
    };
}
export const actResetPasswordRequest = (id) => {
    return () => {
        return callApi(`users/resetPassword/${id}`, 'POST', null).then(res => {
            console.log(res.data);
            Swal.fire(
                'Thành công!',
                'Mật khẩu người dùng này đã đặt lại.',
                'success'
            )
        }).catch(err => {
            console.log(err.response.data);
        })
    }
}
export const actChangeRoleRequest = (id) => {
    return dispatch => {
        return callApi(`users/changeRole/${id}`, 'POST', null).then(res => {
            dispatch(actChangeRole(id, res.data.role));
            Swal.fire(
                'Thành công!',
                'Vai trò người dùng này đã thay đổi.',
                'success'
            );
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${err.response.data}`,
            })
        })
    }
}
export const actChangeRole = (id, role) => {
    return {
        type: Types.CHANGE_ROLE,
        id,
        role
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

export const changeIsLoading = () => {
    return {
        type: Types.CHANGE_ISLOADING,
    }
}
export const changeIsDisplayInputAnswer = (questionId) => {
    return {
        type: Types.CHANGE_ISDISPLAYINPUTANSWER,
        questionId
    }
}
export const changeIsDisplayScrollToTopButton = () => {
    return {
        type: Types.CHANGE_ISDISPLAYSCROLLTOTOPBUTTON
    }
}
export const changeIsDisplayEditAnswerInput = (answerId) => {
    return {
        type: Types.CHANGE_ISDISPLAYEDITANSWERINPUT,
        answerId
    }
}
export const changeIsDisplayAddUserForm = () => {
    return {
        type: Types.CHANGE_ISDISPLAYADDUSERFORM
    }
}
export const resetIsDisplayEditAnswerInput = () => {
    return {
        type: Types.RESET_ISDISPLAYEDITANSWERINPUT
    }
}
export const actFetchUsersRequest = () => {
    return dispatch => {
        return callApi('users/list', 'GET', null).then(res => {
            dispatch(actFetchUsers(res.data));
        }).catch(err => {
            console.log(err.response.data);
        });
    };
}
export const actFetchUsers = (users) => {
    return {
        type: Types.FETCH_USERS,
        users
    }
}
export const actFetchSessionsRequest = () => {
    return dispatch => {
        return callApi('sessions/list', 'GET', null).then(res => {
            setTimeout(() => {
                dispatch(changeIsLoading());
            },500);
            dispatch(actFetchSessions(res.data));
        }).catch(err => {
            console.log(err.response.data);
        });
    };
}
export const actFetchSessions = (sessions) => {
    return {
        type: Types.FETCH_SESSIONS,
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
        type: Types.FETCH_SESSION_BY_ID,
        session
    }
}
// export const actCheckLoggedRequest = () => {
//     return dispatch => {
//         return callApi(`users/checkLogged`, 'GET', null).then(res => {
//             dispatch(actChangeIsLogged(res.data.status, res.data.userInfo));
//         }).catch(err => {
//             console.log(err.response.data);
//             dispatch(actChangeIsLogged(err.response.data.status, err.response.data.userInfo));
//         });
//     };
// }
// export const actChangeIsLogged = (status, userInfo) => {
//     return {
//         type: Types.CHANGE_ISLOGGED,
//         status,
//         userInfo
//     }
// }
export const actAddUserRequest = (userInfo) => {
    return dispatch => {
        return callApi('users/create', 'POST', userInfo).then(res => {
            dispatch(changeIsDisplayAddUserForm());
            dispatch(actAddUser(res.data.user));
        }).catch(err => {
            console.log(err.response.data);
        });
    };
}
export const actAddUser = (user) => {
    return {
        type: Types.ADD_USER,
        user
    }
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
        type: Types.ADD_SESSION,
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
        type: Types.ADD_QUESTION,
        data
    }
}
export const actDeleteUserRequest = (id) => {
    return dispatch => {
        return callApi(`users/delete/${id}`, 'DELETE', null).then(res => {
            Swal.fire(
                'Đã xóa!',
                'Người dùng đã được xóa.',
                'success'
            )
            dispatch(actDeleteUser(id));
        }).catch(err => {
            console.log(err);
        });
    };
}
export const actDeleteUser = (id) => {
    return {
        type: Types.DELETE_USER,
        id
    }
}
export const actDeleteSessionRequest = (id) => {
    return dispatch => {
        return callApi(`sessions/delete/${id}`, 'DELETE', null).then(res => {
            Swal.fire(
                'Đã xóa!',
                'Phiên hỏi đáp đã được xóa.',
                'success'
            )
            dispatch(actDeleteSession(id));
        }).catch(err => {
            console.log(err);
        });
    };
}
export const actDeleteSession = (id) => {
    return {
        type: Types.DELETE_SESSION,
        id
    }
}
export const actAddAnswerRequest = (answerInfo) => {
    return dispatch => {
        return callApi('answers/create', 'POST', answerInfo).then(res => {
            dispatch(actAddAnswer(res.data));
            dispatch(actUpdateNumberOfAnswers("addAnswer", answerInfo.questionId));
        }).catch(err => {
            console.log(err.response.data);
        });
    };
}
export const actAddAnswer = (data) => {
    return {
        type: Types.ADD_ANSWER,
        data
    }
}
export const actFetchAnswersOfQuestionRequest = (questionId) => { // Lấy tất cả câu trả lời theo questionId
    return dispatch => {
        return callApi(`answers/getbyquestionid/${questionId}`, 'GET', null).then(res => {
            dispatch(actFetchAnswersOfQuestion(questionId, res.data));
        }).catch(err => {
            console.log(err.response.data);
        });
    };
}
export const actFetchAnswersOfQuestion = (questionId, data) => {
    return {
        type: Types.FETCH_ANSWERS_BY_QUESTIONID,
        questionId,
        data
    }
}
export const actDeleteQuestionRequest = (id) => {
    return dispatch => {
        return callApi(`questions/delete/${id}`, 'DELETE', null).then(res => {
            // console.log(res.data);
            Swal.fire(
                'Đã xóa!',
                'Câu hỏi đã được xóa.',
                'success'
            )
            dispatch(actDeleteQuestion(id));
        }).catch(err => {
            console.log(err);
        });
    };
}
export const actDeleteQuestion = (id) => {
    return {
        type: Types.DELETE_QUESTION,
        id
    }
}
export const actDeleteAnswerRequest = (id) => {
    return dispatch => {
        return callApi(`answers/delete/${id}`, 'DELETE', null).then(res => {
            Swal.fire(
                'Đã xóa!',
                'Câu trả lời đã được xóa.',
                'success'
            )
            dispatch(actDeleteAnswer(res.data.answers[0].questionId, id));
            dispatch(actUpdateNumberOfAnswers("deleteAnswer", res.data.answers[0].questionId));
        }).catch(err => {
            console.log(err);
        });
    };
}
export const actDeleteAnswer = (questionId, answerId) => {
    return {
        type: Types.DELETE_ANSWER,
        questionId,
        answerId
    }
}
export const actUpdateNumberOfAnswers = (actionName, questionId) => {
    return {
        type: Types.UPDATE_NUMBEROFANSWERS,
        actionName,
        questionId
    }
}
export const actEditAnswerRequest = (id, contentAnswer) => {
    return dispatch => {
        return callApi(`answers/edit/${id}`, 'DELETE', contentAnswer).then(res => {
            Swal.fire(
                'Đã sửa!',
                'Câu trả lời đã được sửa.',
                'success'
            );
            dispatch(resetIsDisplayEditAnswerInput());
            dispatch(actEditAnswer(res.data.answer));
        }).catch(err => {
            console.log(err.response.data);
        });
    };
}
export const actEditAnswer = (answer) => {
    return {
        type: Types.EDIT_ANSWER,
        answer 
    }
}
