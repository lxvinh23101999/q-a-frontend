import React from 'react';
import SurveyPage from './pages/SurveyPage/SurveyPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import SurveyQuestionPage from './pages/SurveyQuestionPage/SurveyQuestionPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminPage from './pages/AdminPage/AdminPage';
import MyInfoPage from './pages/MyInfoPage/MyInfoPage';
import { Redirect } from 'react-router-dom';
import SessionPage from './pages/SessionPage/SessionPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
const routes = [
    {
        path: '/signup',
        exact: false,
        main: () => <SignUpPage></SignUpPage>
    },
    {
        path: '/surveys',
        exact: true,
        main: () => {
            if (!window.localStorage.getItem('isLogged')) {
                return <Redirect to={'/login'}></Redirect>
            }
            else return <SurveyPage />
        }
    },
    {
        path: '/sessions',
        exact: true,
        main: () => {
            if (!window.localStorage.getItem('isLogged')) {
                return <Redirect to={'/login'}></Redirect>
            }
            else return <SessionPage />
        }
    },
    {
        path: '/',
        exact: true,
        main: () => <Redirect to={'/sessions'}></Redirect>
    },
    {
        path: '/sessions/:id',
        exact: false,
        main: ({ match, location }) => {
            if (!window.localStorage.getItem('isLogged')) {
                return <Redirect to={'/login'}></Redirect>
            }
            else return <QuestionPage match={match} location={location}/>
        }
    },
    {
        path: '/surveys/:id',
        exact: false,
        main: ({ match, location }) => {
            if (!window.localStorage.getItem('isLogged')) {
                return <Redirect to={'/login'}></Redirect>
            }
            else return <SurveyQuestionPage match={match} location={location}/>
        }
    },
    {
        path: '/login',
        exact: false,
        main: ({ history, location }) => <LoginPage history={history} location={location} />
    },
    {
        path: '/admin',
        exact: false,
        main: () => {
            if (!window.localStorage.getItem('isLogged')) {
                return <Redirect to={'/login'}></Redirect>
            }
            else return < AdminPage />
        }
    },
    {
        path: '/myinfo',
        exact: false,
        main: () => {
            if (!window.localStorage.getItem('isLogged')) {
                return <Redirect to={'/login'}></Redirect>
            }
            else return < MyInfoPage />
        }
    },
    {
        path: '',
        exact: false,
        main: () => {
            if (!window.localStorage.getItem('isLogged')) {
                return <Redirect to={'/login'}></Redirect>
            }
            else return < NotFoundPage />
        }
    }
];

export default routes;