import { useEffect, useState } from 'react';
import { Results } from '../../components/Results/Results';
import './EvaluationPage.css';
import { QuestionDataStructure } from '../../components/Question/Question';
import { Link } from 'react-router-dom';

interface EvaluationPageProps {
  yourAnswers: number[];
  questionId: number;
}

export const EvaluationPage: React.FC<EvaluationPageProps> = ({ yourAnswers, questionId }) => {
  const [questionData, setQuestionData] = useState<QuestionDataStructure>();

  useEffect(() => {
    const fetchQuestion = async (): Promise<void> => {
      const response = await fetch(`https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/${questionId}.json`);
      const data= await response.json();
      setQuestionData(data);
      }

    fetchQuestion();
  }, [questionId]);

  return (
    <div className="evaluation">

      <h2 className="evaluation__title">Tvoje hodnocení</h2>

      <div className="evaluation__content">
        {
          questionData ?
          <>
              <Results questions={questionData.questions} yourAnswers={yourAnswers} />

              <div className="success-rate">
              100 %
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