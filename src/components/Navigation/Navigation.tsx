import './Navigation.css';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {

  return (
    <nav className="menu">
      <NavLink to="/" className={ ({isActive}) => `menu__link ${isActive ? 'menu__link--active' : ''}` }> Úvod </NavLink>
      <NavLink to="/quizes" className={ ({isActive}) => `menu__link ${isActive ? 'menu__link--active' : ''}` }> Kvízy </NavLink>
      <NavLink to="/ranking" className={ ({isActive}) => `menu__link ${isActive ? 'menu__link--active' : ''}` }> Žebříček </NavLink>
    </nav>
  )
}