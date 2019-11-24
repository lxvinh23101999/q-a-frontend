import * as Types from './../constants/ActionTypes';
import _ from 'lodash';
let initialState = [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SURVEYS:
            state = action.surveys;
            _.reverse(state);
            return [...state];
        case Types.ADD_SURVEY:
            let hasPassword = action.data.survey.password ? true : false;
            let survey = {
                ...action.data.survey,
                nameOfOwner: action.data.nameOfOwner,
                permission: true,
                hasPassword: hasPassword,
                surveyQuestions: []
            }
            state.unshift(survey);
            return [...state];
        case Types.DELETE_SURVEY:
            let surveyId = action.id;
            _.remove(state, survey => {
                return survey.id === surveyId;
            });
            return [...state];
        case Types.CHANGE_CLOSEDATSURVEY:
            let changeIndex = _.findIndex(state, function (item) { return item.id === action.id; });
            let subSurveys = {
                ...state[changeIndex],
                closedAt: action.closedAt
            }
            state[changeIndex] = subSurveys;
            return [...state];
        default:
            return [...state];
    }
};

export default myReducer;