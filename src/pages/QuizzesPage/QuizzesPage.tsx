import { useState, useEffect } from "react";
import { QuizList } from "../../components/QuizList/QuizList"

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
    const fetchQuizzes = async (): Promise<void> => {
      const response = await fetch('https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quizes.json');
      const data = await response.json();
      setQuizzesData(data);
    };

    fetchQuizzes();
  }, []);

  return (
    <QuizList
      quizzesData={quizzesData}
      onHandleReset={onHandleReset}
    />
  )
}