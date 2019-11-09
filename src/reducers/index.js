import { combineReducers } from 'redux';
import users from './users';
import sessions from './sessions';
import questions from './questions';
import answers from './answers';
import isLoading from './isLoading';
import isDisplayAddButton from './isDisplayAddButton';
import isDisplayInputAnswer from './isDisplayInputAnswer';
import isDisplayScrollToTopButton from './isDisplayScrollToTopButton';
import isDisplayEditAnswerInput from './isDisplayEditAnswerInput';
import isDisplayAddUserForm from './isDisplayAddUserForm';
import searchSession from './searchSession';
import searchQuestion from './searchQuestion';
const rootReducer = combineReducers({
    users,
    sessions,
    questions,
    answers,
    isLoading,
    isDisplayAddButton,
    isDisplayInputAnswer,
    isDisplayScrollToTopButton,
    isDisplayEditAnswerInput,
    isDisplayAddUserForm,
    searchSession,
    searchQuestion
});
export default rootReducer;