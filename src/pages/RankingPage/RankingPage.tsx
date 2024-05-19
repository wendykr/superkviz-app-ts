import './RankingPage.css';

export const RankingPage: React.FC = () => {

  return (
    <div className="topscore">

      <h2 className="topscore__title">Žebříček nejlepších</h2>

      <ul className="topscore__list">

        <li className="topscore__item">
          <span className="topscore__name">Jarda Vomáčka</span>
          <span className="topscore__score">9876 bodů</span>
        </li>

        <li className="topscore__item">
          <span className="topscore__name">Emílie Přelétavá</span>
          <span className="topscore__score">8723 bodů</span>
        </li>

        <li className="topscore__item">
          <span className="topscore__name">Petra Novotná</span>
          <span className="topscore__score">7465 bodů</span>
        </li>

        <li className="topscore__item">
          <span className="topscore__name">Alena Blonďatá</span>
          <span className="topscore__score">7132 bodů</span>
        </li>

        <li className="topscore__item">
          <span className="topscore__name">Karel Polívka</span>
          <span className="topscore__score">5865 bodů</span>
        </li>

      </ul>

  </div>
  )
}