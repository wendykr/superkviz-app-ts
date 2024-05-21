import { Answer } from '../Question/Question';
import { Result } from '../Result/Result';
import './Results.css';

interface ResultsProps {
  questions: Answer[] | undefined;
  yourAnswers: number[];
}

export const Results: React.FC<ResultsProps> = ({ questions, yourAnswers }) => {
  return (
    <div className="results">
      {questions?.map((question, index) => {
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
        Správně máš {yourAnswers.filter((answer, index) => answer === questions?.[index].correctAnswer).length} ze {questions?.length} otázek.
      </div>
    </div>
  );
}