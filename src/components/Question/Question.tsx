import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Question.css';
import { useQuestions } from '../../hooks/useQuestions';

export interface QuestionsStructure {
  id: number;
  title: string;
  image: string;
  answers: string[];
  correctAnswer: number;
  quizzesId: number;
}

interface QuestionProps {
  yourAnswers: (index: number) => void;
  setQuestionId: (id: string) => void;
}

export const Question: React.FC<QuestionProps> = ({
  yourAnswers,
  setQuestionId,
}) => {
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const [, setIsLoading] = useState<boolean>(true);
  const [, setError] = useState<string | null>(null);
  const { questionId } = useParams<{ questionId: string }>();
  const navigate = useNavigate();
  const { getQuestion, isLoading, error, questionData } = useQuestions();

  useEffect(() => {
    if (questionId) {
      setQuestionId(questionId);
      getQuestion(questionId);
    } else {
      setIsLoading(false);
      setError('Neplatné nebo chybějící ID otázky.');
    }
  }, [questionId, setQuestionId]);

  useEffect(() => {
    if (
      questionData &&
      questionData.length > 0 &&
      currentQuestionNumber >= questionData.length
    ) {
      navigate('/evaluation');
    }
  }, [currentQuestionNumber, questionData, navigate]);

  const currentQuestion = questionData?.[currentQuestionNumber];

  const handleClick = (index: number) => {
    setQuestionNumber((prev) => prev + 1);
    setCurrentQuestionNumber((prev) => prev + 1);
    yourAnswers(index);
  };

  return (
    <div className="question">
      {isLoading && <p>Načítání dat...</p>}
      {error && !isLoading && <p>{error}</p>}
      {currentQuestion && (
        <>
          <p className="question__number">
            Otázka {questionNumber} / {questionData.length}
          </p>

          <h2 className="question__title">{currentQuestion.title}</h2>

          <div className="question__content">
            <img
              className="question__image"
              src={currentQuestion.image}
              alt="Ilustrační obrázek"
            />

            <div className="question__answers">
              {currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  className="question__answer"
                  onClick={() => handleClick(index)}
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
