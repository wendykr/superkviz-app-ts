import { QuizzesStructure } from '../../pages/QuizzesPage/QuizzesPage';
import { QuizItem } from '../QuizItem/QuizItem';
import './QuizList.css';

interface QuizListProps {
  quizzesData: QuizzesStructure[];
  onHandleReset: () => void;
}

export const QuizList: React.FC<QuizListProps> = ({
  quizzesData,
  onHandleReset,
}) => {
  return (
    <div className="quiz-list">
      {quizzesData.map((quiz, index) => (
        <QuizItem
          image={quiz.image}
          title={quiz.title}
          questions={quiz.questions}
          id={quiz.id}
          key={index}
          onHandleReset={onHandleReset}
        />
      ))}
    </div>
  );
};
