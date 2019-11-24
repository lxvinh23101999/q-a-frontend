import * as Types from './../constants/ActionTypes';
import _ from 'lodash';
let initialState = [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_MANAGESURVEYS:
            state = action.surveys;
            return [...state];
        case Types.DELETE_MANAGESURVEY:
            let surveyId = action.id;
            _.remove(state, survey => {
                return survey.id === surveyId;
            });
            return [...state];
        default:
            return [...state];
    }
};

export default myReducer;