import { Navigation } from '../Navigation/Navigation';
import './Header.css';

export const Header: React.FC = () => {

  return (
    <header className="header">
      <h1 className="header__title">Superkvíz</h1>

      <Navigation />
    </header>
  )
}