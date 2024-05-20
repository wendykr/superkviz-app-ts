import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { IntroPage } from './pages/IntroPage/IntroPage.tsx';
import { QuizzesPage } from './pages/QuizzesPage/QuizzesPage.tsx';
import { TopScorePage } from './pages/TopScorePage/TopScorePage.tsx';
import { Question } from './components/Question/Question.tsx';
import { EvaluationPage } from './pages/EvaluationPage/EvaluationPage.tsx';


const Main = () => {
  const [yourAnswers, setYourAnswers] = useState<number[]>([]);

  const handleAnswer = (index: number) => {
    setYourAnswers(prev => [...prev, index]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<App />}
      >
        <Route
          index
          element={<IntroPage />}
        />
        <Route
          path="quizzes"
          element={<QuizzesPage />}
        />
        <Route
          path="quizzes/:questionId"
          element={
            <Question
              yourAnswers={handleAnswer}
            />
          }
        />
        <Route
          path="evaluation"
          element={<EvaluationPage yourAnswers={yourAnswers} />}
        />
        <Route
          path="topscore"
          element={<TopScorePage />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

const rootElement: HTMLElement = document.getElementById('root')!;
ReactDOM.createRoot(rootElement).render(<Main />);
