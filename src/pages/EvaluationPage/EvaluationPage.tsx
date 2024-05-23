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

  useEffect(() => {
    if (questionId) {
      getQuestion();
    }
  }, [questionId]);
  
  const getQuestion = async (): Promise<void> => {

    try {
      const { data: question, error } = await supabase
        .from('questions')
        .select('*')
        .eq('quizzesId', Number(questionId));
  
      if (error) {
        console.error('Chyba při načítání dat:', error);
        return;
      }
  
      if (question && question.length > 0) {
        setQuestionData(question);
      } else {
        console.error('Nebyly nalezeny žádné otázky.');
      }
    } catch (error) {
      console.error('Neočekávaná chyba při načítání dat:', error);
    }
  };

  useEffect(() => {

    if (questionData) {
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
        {
          questionData && questionData.length > 0 ?
          <>
            <Results questions={questionData} yourAnswers={yourAnswers} />

            <div className="success-rate">
              {((correctQuestions / totalQuestions) * 100).toFixed(0)} %
            </div>
          </>
          :
          <div>
            <p>Zde není žádné hodnocení. Pro jeho zobrazení je nutné nejpve vyplnit kvíz.</p>
            <p>Přejít na výběr s <Link to="/quizzes">Kvízy</Link></p>
          </div>
        }
      </div>

    </div>
  )
}