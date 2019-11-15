import * as Types from './../constants/ActionTypes';
import _ from 'lodash';
let initialState = [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SESSIONS:
            state = action.sessions;
            return [...state];
        case Types.ADD_SESSION:
            let hasPassword = action.data.session.password ? true : false;
            let session = {
                id: action.data.session.id,
                topic: action.data.session.topic,
                nameOfOwner: action.data.nameOfOwner,
                description: action.data.session.description,
                closedAt: action.data.session.closedAt,
                createdAt: action.data.session.createdAt,
                permission: true,
                hasPassword: hasPassword,
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
        case Types.CHANGE_CLOSEDATSESSION:
            let changeIndex = _.findIndex(state, function (item) { return item.id === action.id; });
            let subSession = {
                ...state[changeIndex],
                closedAt: action.closedAt
            }
            state[changeIndex] = subSession;
            return [...state];
        default:
            return [...state];
    }
};

export default myReducer;