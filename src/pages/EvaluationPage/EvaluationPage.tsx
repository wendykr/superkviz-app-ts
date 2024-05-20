import { Results } from '../../components/Results/Results';
import './EvaluationPage.css';

interface EvaluationPageProps {
  yourAnswers: number[];
}

export const EvaluationPage: React.FC<EvaluationPageProps> = ({ yourAnswers }) => {

  return (
    <div className="evaluation">

      <h2 className="evaluation__title">Tvoje hodnocení</h2>

      { yourAnswers }

      <div className="evaluation__content">

        <Results />

        <div className="success-rate">
          100 %
        </div>

      </div>

    </div>
  )
}