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
  const [correctQuestions, setCorrectQuestions] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [, setIncorrectQuestions] = useState<number>(0);

  useEffect(() => {
    const fetchQuestion = async (): Promise<void> => {
      const response = await fetch(`https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/${questionId}.json`);
      const data= await response.json();
      setQuestionData(data);
      }

    fetchQuestion();
  }, [questionId]);

  useEffect(() => {
    if (questionData) {
      const total = questionData.questions.length;
      const correct = yourAnswers.filter((answer, index) => answer === questionData.questions[index].correctAnswer).length;
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
          questionData ?
          <>
            <Results questions={questionData.questions} yourAnswers={yourAnswers} />

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