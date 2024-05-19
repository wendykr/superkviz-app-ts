import { QuizzesStructure } from '../../pages/QuizzesPage/QuizzesPage';
import { QuizItem } from '../QuizItem/QuizItem';
import './QuizList.css';

interface QuizListProps {
	quizzesData: QuizzesStructure[];
}

export const QuizList: React.FC<QuizListProps> = ({ quizzesData }) => {

  return (
		<div className="quiz-list">

			{
				quizzesData.map((quiz, index) => 
					<QuizItem image={quiz.image} title={quiz.title} questions={quiz.questions} id={quiz.id} key={index} />
				)
			}

		</div>
  )
}