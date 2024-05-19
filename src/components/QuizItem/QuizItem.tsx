import { Link } from 'react-router-dom';
import { QuizzesStructure } from '../../pages/QuizzesPage/QuizzesPage';
import './QuizItem.css';

interface QuizItemProps extends QuizzesStructure {
  key: number;
}

export const QuizItem: React.FC<QuizItemProps> = ({ image, title, questions, id }) => {

  return (
    <div className="quiz-item">
      <img className="quiz-item__image" src={image} alt="obrázek" />
      <div className="quiz-item__content">
        <h2 className="quiz-item__title">{title}</h2>
        <p className="quiz-item__questions">{questions} otázek</p>
        <Link className="quiz-item__link" to={`${id}`}>Spustit kvíz</Link>
      </div>
    </div>
  )
}