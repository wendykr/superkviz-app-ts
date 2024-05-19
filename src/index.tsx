import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import { IntroPage } from './pages/IntroPage/IntroPage.tsx';
import { QuizzesPage } from './pages/QuizzesPage/QuizzesPage.tsx';
import { TopScorePage } from './pages/TopScorePage/TopScorePage.tsx';
import { Question } from './components/Question/Question.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <IntroPage />,
      },
      {
        path: 'quizzes',
        element: <QuizzesPage />,
      },
      {
        path: 'quizzes/:questionId',
        element: <Question />,
      },
      {
        path: 'topscore',
        element: <TopScorePage />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
