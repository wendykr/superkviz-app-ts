import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { IntroPage } from './pages/IntroPage/IntroPage.tsx';
import { QuizzesPage } from './pages/QuizzesPage/QuizzesPage.tsx';
import { TopScorePage } from './pages/TopScorePage/TopScorePage.tsx';
import { Question } from './components/Question/Question.tsx';
import { EvaluationPage } from './pages/EvaluationPage/EvaluationPage.tsx';
import { ErrorPage } from './pages/ErrorPage/ErrorPage.tsx';

const Main = () => {
  const [yourAnswers, setYourAnswers] = useState<number[]>([]);
  const [questionId, setQuestionId] = useState<string>();

  const handleAnswer = (index: number) => {
    setYourAnswers((prev) => [...prev, index]);
  };

  const handleReset = () => {
    setYourAnswers([]);
    setQuestionId('');
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<IntroPage />} />
        <Route
          path="quizzes"
          element={<QuizzesPage onHandleReset={handleReset} />}
        />
        <Route
          path="quizzes/:questionId"
          element={
            <Question
              yourAnswers={handleAnswer}
              setQuestionId={setQuestionId}
            />
          }
        />
        <Route
          path="evaluation"
          element={
            <EvaluationPage
              yourAnswers={yourAnswers}
              questionId={Number(questionId)}
            />
          }
        />
        <Route path="topscore" element={<TopScorePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

const rootElement: HTMLElement = document.getElementById('root')!;
ReactDOM.createRoot(rootElement).render(<Main />);
