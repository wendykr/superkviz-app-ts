import './Navigation.css';

export const Navigation: React.FC = () => {

  return (
    <nav className="menu">
      <a href="#" className="menu__link menu__link--active">Úvod</a>
      <a href="#" className="menu__link">Kvízy</a>
      <a href="#" className="menu__link">Žebříček</a>
    </nav>
  )
}