import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <h1 className="header__title">Superkvíz</h1>
      </Link>

      <Navigation />
    </header>
  );
};
