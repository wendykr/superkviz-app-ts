import { QuizzesStructure } from '../../pages/QuizzesPage/QuizzesPage';
import './QuizItem.css';

interface QuizItemProps extends QuizzesStructure {
  key: number;
}

export const QuizItem: React.FC<QuizItemProps> = ({ image, title, questions }) => {

  return (
    <div className="quiz-item">
      <img className="quiz-item__image" src={image} alt="obrázek" />
      <div className="quiz-item__content">
        <h2 className="quiz-item__title">{title}</h2>
        <p className="quiz-item__questions">{questions} otázek</p>
        <a className="quiz-item__link" href="#">Spustit kvíz</a>
      </div>
    </div>
  )
}