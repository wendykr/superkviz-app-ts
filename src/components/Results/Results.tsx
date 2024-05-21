import { Answer } from '../Question/Question';
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
          <div className="result" key={index}>
            <img
              className="result__icon"
              src={`images/${isCorrect ? 'correct' : 'incorrect'}.svg`}
              alt={isCorrect ? 'správně' : 'špatně'}
            />
            <div className="result__content">
              <h3 className="result__title">
                {question.id}. {question.title}
              </h3>
              <p className="result__answer">Tvoje odpověď: {userAnswer}</p>
              {!isCorrect && (
                <p className="result__answer result__answer--correct">
                  Správná odpověď: {correctAnswer}
                </p>
              )}
            </div>
          </div>
        );
      })}

      <div className="results__count">
        Správně máš {yourAnswers.filter((answer, index) => answer === questions?.[index].correctAnswer).length} ze {questions?.length} otázek.
      </div>
    </div>
  );
}