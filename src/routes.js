import React from 'react';
import SessionPage from './pages/SessionPage/SessionPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <SessionPage />
    },
    {
        path: '/sessions/:id',
        exact: false,
        main: () => <QuestionPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;