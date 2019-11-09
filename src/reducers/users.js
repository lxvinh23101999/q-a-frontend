import * as Types from './../constants/ActionTypes';
import _ from 'lodash';
let initialState = [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_USERS:
            state = action.users;
            return [...state];
        case Types.ADD_USER:
            state.push(action.user);
            return [...state];
        case Types.DELETE_USER:
            _.remove(state, user => {
                return user.id === action.id;
            });
            return [...state];
        case Types.CHANGE_ROLE:
            let changeIndex = _.findIndex(state, function (item) { return item.id === action.id; });
            let user = {
                ...state[changeIndex],
                role: action.role
            }
            state[changeIndex] = user;
            return [...state];
        default:
            return [...state];
    }
};

export default myReducer;