import './Results.css';

export const Results: React.FC = () => {

  return (
    <div className="results">

      <div className="result">
        <img className="result__icon" src="images/incorrect.svg" alt="špatně" />

        <div className="result__content">
          <h3 className="result__title">1. Co je ikonická hračka z 80. let?</h3>
          <p className="result__answer">Tvoje odpověď: Kočičák</p>
          <p className="result__answer result__answer--correct">Správná odpověď: Mončičák</p>
        </div>
      </div>

      <div className="result">
        <img className="result__icon" src="images/correct.svg" alt="správně" />

        <div className="result__content">
          <h3 className="result__title">2. Jaké je Luďkovo nejoblíbenější ovoce?</h3>
          <p className="result__answer">Tvoje odpověď: Jahůdka</p>
        </div>
      </div>

      <div className="result">
        <img className="result__icon" src="images/correct.svg" alt="správně" />

        <div className="result__content">
          <h3 className="result__title">3. Zrcadlo, kdo je na světě nejkrásnější?</h3>
          <p className="result__answer">Tvoje odpověď: Já, já jsem nejkrásnější!</p>
        </div>
      </div>

      <div className="results__count">
        Správně máš 2 ze 3 otázek.
      </div>

    </div>
  )
}