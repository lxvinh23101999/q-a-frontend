import * as Types from './../constants/ActionTypes';
import _ from 'lodash';
let initialState = [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SESSIONS:
            state = action.sessions;
            return [...state];
        case Types.ADD_SESSION:
            let session = {
                id: action.data.session.id,
                topic: action.data.session.topic,
                nameOfOwner: action.data.nameOfOwner,
                description: action.data.session.description,
                createdAt: action.data.session.createdAt,
                permission: true,
                questions: []
            }
            state.push(session);
            return [...state];
        case Types.DELETE_SESSION:
            let sessionId = action.id;
            _.remove(state, session => {
                return session.id === sessionId;
            });
            return [...state];
        default:
            return [...state];
    }
};

export default myReducer;