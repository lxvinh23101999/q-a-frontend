import * as Types from './../constants/ActionTypes';
import _ from 'lodash';
let initialState = [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_MANAGESESSIONS:
            state = action.sessions;
            return [...state];
        case Types.DELETE_MANAGESESSION:
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