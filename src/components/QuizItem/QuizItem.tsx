import { Link } from 'react-router-dom';
import { QuizzesStructure } from '../../pages/QuizzesPage/QuizzesPage';
import { declineQuestions } from '../../helpers/helpers';
import './QuizItem.css';

interface QuizItemProps extends QuizzesStructure {
  key: number;
  onHandleReset: () => void;
}

export const QuizItem: React.FC<QuizItemProps> = ({ image, title, questions, id, onHandleReset }) => {

  return (
    <div className="quiz-item">
      <img className="quiz-item__image" src={image} alt="obrázek" />
      <div className="quiz-item__content">
        <h2 className="quiz-item__title">{title}</h2>
        <p className="quiz-item__questions">{questions} {declineQuestions(questions)}</p>
        <Link className="quiz-item__link" to={`/quizzes/${id}`} onClick={onHandleReset}>Spustit kvíz</Link>
      </div>
    </div>
  )
}