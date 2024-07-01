import { useEffect, useState } from "react";
import { Results } from "../../components/Results/Results";
import "./EvaluationPage.css";
import { Link } from "react-router-dom";
import { useQuestions } from "../../hooks/useQuestions";

interface EvaluationPageProps {
  yourAnswers: number[];
  questionId: number;
}

export const EvaluationPage: React.FC<EvaluationPageProps> = ({
  yourAnswers,
  questionId,
}) => {
  const [correctQuestions, setCorrectQuestions] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [, setIncorrectQuestions] = useState<number>(0);
  const [, setIsLoading] = useState<boolean>(true);
  const [, setError] = useState<string | null>(null);
  const { getQuestion, isLoading, error, questionData } = useQuestions();

  useEffect(() => {
    if (questionId && yourAnswers.length > 0) {
      getQuestion(questionId);
    } else {
      setIsLoading(false);
      setError("Neplatné nebo chybějící ID otázky.");
    }
  }, [questionId, yourAnswers]);

  useEffect(() => {
    if (questionData.length > 0) {
      const total = questionData.length;
      const correct = yourAnswers.filter(
        (answer, index) => answer === questionData[index]?.correctAnswer
      ).length;
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
            <p>
              Zde není žádné hodnocení. Pro jeho zobrazení je nutné nejprve
              vyplnit kvíz.
            </p>
            <p>
              Přejít na výběr s <Link to="/quizzes">Kvízy</Link>
            </p>
          </div>
        )}
        {!isLoading &&
          !error &&
          yourAnswers.length > 0 &&
          questionData &&
          questionData.length > 0 && (
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
};
