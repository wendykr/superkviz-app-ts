import { QuizzesStructure } from '../../pages/QuizzesPage/QuizzesPage';
import './QuizList.css';

interface QuizListProps {
	quizzesData: QuizzesStructure[];
}

export const QuizList: React.FC<QuizListProps> = ({ quizzesData }) => {

  return (
		<div className="quiz-list">

			{
				quizzesData.map((quiz) => 
					<div className="quiz-item">
						<img className="quiz-item__image" src={quiz.image} alt="obrázek" />
						<div className="quiz-item__content">
							<h2 className="quiz-item__title">{quiz.title}</h2>
							<p className="quiz-item__questions">{quiz.questions} otázek</p>
							<a className="quiz-item__link" href="#">Spustit kvíz</a>
						</div>
					</div>
				)
			}

		</div>
  )
}