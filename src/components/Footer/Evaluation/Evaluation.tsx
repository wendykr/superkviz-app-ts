import { Results } from '../../Results/Results';
import './Evaluation.css';

export const Evaluation: React.FC = () => {

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