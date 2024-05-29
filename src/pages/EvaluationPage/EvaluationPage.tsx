import { useEffect, useState } from 'react';
import { Results } from '../../components/Results/Results';
import './EvaluationPage.css';
import { QuestionsStructure } from '../../components/Question/Question';
import { Link } from 'react-router-dom';
import { supabase } from '../../supabaseClient';

interface EvaluationPageProps {
  yourAnswers: number[];
  questionId: number;
}

export const EvaluationPage: React.FC<EvaluationPageProps> = ({ yourAnswers, questionId }) => {
  const [questionData, setQuestionData] = useState<QuestionsStructure[]>([]);
  const [correctQuestions, setCorrectQuestions] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [, setIncorrectQuestions] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (questionId && yourAnswers.length > 0) {
      getQuestion();
    } else {
      setIsLoading(false);
      setError('Neplatné nebo chybějící ID otázky.');
    }
  }, [questionId, yourAnswers]);
  
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
        setError(`ID ${questionId} neexistuje.`);
      }
      setIsLoading(false);
    } catch (error) {
      setError('Neočekávaná chyba při načítání dat: ' + (error as Error).message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (questionData.length > 0) {
      const total = questionData.length;
      const correct = yourAnswers.filter((answer, index) => answer === questionData[index]?.correctAnswer).length;
      const incorrect = total - correct;

      setTotalQuestions(total);
      setCorrectQuestions(correct);
      setIncorrectQuestions(incorrect);
    }
  }, [questionData, yourAnswers]);

  return (
    <div className="evaluation">
      <h2 className="evaluation__title">Tvoje hodnocení</h2>
      <div className="evaluation__content">
        {isLoading && <p>Načítání dat...</p>}
        {error && !isLoading && <p>{error}</p>}
        {!isLoading && !error && yourAnswers.length === 0 && (
          <div>
            <p>Zde není žádné hodnocení. Pro jeho zobrazení je nutné nejprve vyplnit kvíz.</p>
            <p>Přejít na výběr s <Link to="/quizzes">Kvízy</Link></p>
          </div>
        )}
        {!isLoading && !error && yourAnswers.length > 0 && questionData && questionData.length > 0 && (
          <>
            <Results questions={questionData} yourAnswers={yourAnswers} />
            <div className="success-rate">
              {((correctQuestions / totalQuestions) * 100).toFixed(0)} %
            </div>
          </>
        )}
      </div>
    </div>
  );
}
