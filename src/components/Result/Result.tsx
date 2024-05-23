import './Result.css';

interface ResultProps {
  index: number;
  questionId: number;
  questionTitle: string;
  isCorrect: boolean;
  userAnswer: string;
  correctAnswer: string;
}

export const Result: React.FC<ResultProps> = ({ index, questionId, questionTitle, isCorrect, userAnswer, correctAnswer }) => {

  return (
    <div className="result" key={index}>
      <img
        className="result__icon"
        src={`images/${isCorrect ? 'correct' : 'incorrect'}.svg`}
        alt={isCorrect ? 'správně' : 'špatně'}
      />
      <div className="result__content">
        <h3 className="result__title">
          {questionId}. {questionTitle}
        </h3>
        <p className="result__answer">Tvoje odpověď: {userAnswer}</p>
        {!isCorrect && (
          <p className="result__answer result__answer--correct">
            Správná odpověď: {correctAnswer}
          </p>
        )}
      </div>
    </div>
  )
}