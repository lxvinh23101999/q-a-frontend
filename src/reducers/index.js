import { combineReducers } from 'redux';
import users from './users';
import sessions from './sessions';
import questions from './questions';
import answers from './answers';
import myBasicInfo from './myBasicInfo';
import myAllQuestions from './myAllQuestions';
import myAllAnswers from './myAllAnswers';
import hasSessionPassword from './hasSessionPassword';
import isLoading from './isLoading';
import isDisplayAddButton from './isDisplayAddButton';
import isDisplayInputAnswer from './isDisplayInputAnswer';
import isDisplayScrollToTopButton from './isDisplayScrollToTopButton';
import isDisplayEditAnswerInput from './isDisplayEditAnswerInput';
import isDisplayAddUserForm from './isDisplayAddUserForm';
import searchUser from './searchUser';
import searchSession from './searchSession';
import searchQuestion from './searchQuestion';
import filterSession from './filterSession';
const rootReducer = combineReducers({
    users,
    sessions,
    questions,
    answers,
    myBasicInfo,
    myAllQuestions,
    myAllAnswers,
    hasSessionPassword,
    isLoading,
    isDisplayAddButton,
    isDisplayInputAnswer,
    isDisplayScrollToTopButton,
    isDisplayEditAnswerInput,
    isDisplayAddUserForm,
    searchUser,
    searchSession,
    searchQuestion,
    filterSession
});
export default rootReducer;