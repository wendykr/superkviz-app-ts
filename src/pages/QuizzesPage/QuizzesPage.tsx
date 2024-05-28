import { useState, useEffect } from "react";
import './QuizzesPage.css';
import { QuizList } from "../../components/QuizList/QuizList";
import { supabase } from '../../supabaseClient';

export interface QuizzesStructure {
  id: number;
  title: string;
  image: string;
  questions: number;
}

interface QuizzesPageProps {
  onHandleReset: () => void;
}

export const QuizzesPage: React.FC<QuizzesPageProps> = ({ onHandleReset }) => {
  const [quizzesData, setQuizzesData] = useState<QuizzesStructure[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getQuizzes();
  }, []);

  const getQuizzes = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const { data: quizzes, error } = await supabase
        .from('quizzes')
        .select('*');

      if (error) {
        setError('Chyba při načítání dat: ' + error.message);
        setIsLoading(false);
        return;
      }

      if (quizzes) {
        setQuizzesData(quizzes);
        setIsLoading(false);
      }
    } catch (error) {
      setError('Neočekávaná chyba při načítání dat: ' + (error as Error).message);
    }
  };

  return (
    <>
      {isLoading ? (
        <p className="quizzes__content">Načítání dat...</p>
      ) : (
        <>
          {error && <p className="quizzes__content">{error}</p>}
          {quizzesData && quizzesData.length > 0 ? (
            <QuizList quizzesData={quizzesData} onHandleReset={onHandleReset} />
          ) : (
            <p className="quizzes__content">Databáze neobsahuje žádné kvízy!</p>
          )}
        </>
      )}
    </>
  );
};