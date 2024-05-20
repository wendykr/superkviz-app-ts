import { Results } from '../../components/Results/Results';
import './EvaluationPage.css';

export const EvaluationPage: React.FC = () => {

  return (
    <div className="evaluation">

      <h2 className="evaluation__title">Tvoje hodnocení</h2>

      <div className="evaluation__content">

        <Results />

        <div className="success-rate">
          100 %
        </div>

      </div>

    </div>
  )
}