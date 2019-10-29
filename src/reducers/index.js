import { combineReducers } from 'redux';
import sessions from './sessions';
import isDisplayAddButton from './isDisplayAddButton';
import isDisplayAnswer from './isDisplayAnswer';
import isDisplayScrollToTopButton from './isDisplayScrollToTopButton';
import searchSession from './searchSession';
import searchQuestion from './searchQuestion';
import questions from './questions';
const rootReducer = combineReducers({
    sessions,
    isDisplayAddButton,
    isDisplayAnswer,
    isDisplayScrollToTopButton,
    searchSession,
    searchQuestion,
    questions
});
export default rootReducer;