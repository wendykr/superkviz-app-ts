import './ErrorPage.css';
import { NavLink } from 'react-router-dom';

export const ErrorPage: React.FC = () => {

  return (
    <div className="error">
      <h2 className="error__title">Jejda...</h2>
      <p className="error__text">
        Tuhle stránku ještě nemám nebo jde o chybný odkaz.
      </p>
      <p className="error__text">
        <NavLink to="/" className="error__link">Zpět</NavLink> na hlavní stranu.
      </p>
    </div>
  )
}