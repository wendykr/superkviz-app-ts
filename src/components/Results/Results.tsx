import { declineResultsCount } from '../../helpers/helpers';
import { Answer } from '../Question/Question';
import { Result } from '../Result/Result';
import './Results.css';

interface ResultsProps {
  questions: Answer[];
  yourAnswers: number[];
}

export const Results: React.FC<ResultsProps> = ({ questions, yourAnswers }) => {

  // const total = questions?.length;
  // console.log(total);

  // const success = yourAnswers.filter((answer, index) => answer === questions?.[index].correctAnswer).length;
  // console.log(success);

  // const mistakes = totalQuestion - success;
  // console.log(mistakes);

  return (
    <div className="results">
      {questions.map((question, index) => {
        const userAnswerIndex = yourAnswers[index];
        const userAnswer = question.answers[userAnswerIndex];
        const correctAnswer = question.answers[question.correctAnswer];
        const isCorrect = userAnswerIndex === question.correctAnswer;

        return (
          <Result
            key={index}
            index={index}
            isCorrect={isCorrect}
            questionId={question.id}
            questionTitle={question.title}
            userAnswer={userAnswer}
            correctAnswer={correctAnswer}
          />
        );
      })}

      <div className="results__count">
        Správně máš {yourAnswers.filter((answer, index) => answer === questions?.[index].correctAnswer).length} {declineResultsCount(questions?.length)}.
      </div>
    </div>
  );
}