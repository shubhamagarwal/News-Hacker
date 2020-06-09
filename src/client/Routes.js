import HomePage from './pages/HomePage';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        path: '/articles/:id',
        ...HomePage,
      },
    ],
  },
];
