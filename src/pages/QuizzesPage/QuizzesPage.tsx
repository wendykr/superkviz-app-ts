import { useState, useEffect } from "react";
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

  useEffect(() => {
    getQuizzes();
  }, []);

  const getQuizzes = async (): Promise<void> => {
    try {
      const { data: quizzes, error } = await supabase
        .from('quizzes')
        .select('*');

      if (error) {
        console.error('Chyba při načítání dat:', error);
        return;
      }

      if (quizzes) {
        setQuizzesData(quizzes);
      }
    } catch (error) {
      console.error('Neočekávaná chyba při načítání dat:', error);
    }
  };

  return (
    <QuizList
      quizzesData={quizzesData}
      onHandleReset={onHandleReset}
    />
  );
};