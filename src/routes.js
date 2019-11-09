import React from 'react';
import SessionPage from './pages/SessionPage/SessionPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminPage from './pages/AdminPage/AdminPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <SessionPage />
    },
    {
        path: '/sessions/:id',
        exact: false,
        main: ({match}) => <QuestionPage match={match}/>
    },
    {
        path: '/login',
        exact: false,
        main: ({history}) => <LoginPage history={history}/>
    },
    {
        path: '/admin',
        exact: false,
        main: () => <AdminPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;