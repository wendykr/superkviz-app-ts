import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Question.css';
import { supabase } from '../../supabaseClient';

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

export const Question: React.FC<QuestionProps> = ({ yourAnswers, setQuestionId }) => {
  const [questionData, setQuestionData] = useState<QuestionsStructure[]>([]);
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { questionId } = useParams<{ questionId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (questionId) {
      setQuestionId(questionId);
      getQuestion();
    } else {
      setIsLoading(false);
      setError('Neplatné nebo chybějící ID otázky.');
    }
  }, [questionId, setQuestionId]);
  
  const getQuestion = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const { data: question, error } = await supabase
        .from('questions')
        .select('*')
        .eq('quizzesId', Number(questionId));
  
      if (error) {
        setError('Chyba při načítání dat: ' + error.message);
        setIsLoading(false);
        return;
      }
  
      if (question && question.length > 0) {
        setQuestionData(question);
      } else {
        setError(`Data s ID ${questionId} neexistují v databázi.`);
      }
      setIsLoading(false);
    } catch (error) {
      setError('Neočekávaná chyba při načítání dat: ' + (error as Error).message);
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    if (questionData && questionData.length > 0 && currentQuestionNumber >= questionData.length) {
      navigate('/evaluation');
    }
  }, [currentQuestionNumber, questionData, navigate]);
  
  const currentQuestion = questionData?.[currentQuestionNumber];

  const handleClick = (index: number) => {
    setQuestionNumber(prev => prev + 1);
    setCurrentQuestionNumber(prev => prev + 1);
    yourAnswers(index);
  }

  return (
    <div className="question">
      {isLoading && <p>Načítání dat...</p>}
      {error && !isLoading && <p>{error}</p>}
      {
        currentQuestion &&
        <>
          <p className="question__number">Otázka {questionNumber} / {questionData.length}</p>

          <h2 className="question__title">{currentQuestion.title}</h2>

          <div className="question__content">
            <img className="question__image" src={currentQuestion.image} alt="Ilustrační obrázek" />

            <div className="question__answers">
              {currentQuestion.answers.map((answer, index) => (
                <button key={index} className="question__answer" onClick={() => handleClick(index)}>{answer}</button>
              ))}
            </div>
          </div>
        </>
      }
    </div>
  );
};