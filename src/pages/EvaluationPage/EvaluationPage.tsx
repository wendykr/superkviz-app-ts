import { useEffect, useState } from 'react';
import { Results } from '../../components/Results/Results';
import './EvaluationPage.css';
import { QuestionDataStructure } from '../../components/Question/Question';

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

        <Results questions={questionData?.questions} yourAnswers={yourAnswers} />

        <div className="success-rate">
          100 %
        </div>

      </div>

    </div>
  )
}