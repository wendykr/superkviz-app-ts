import './App.css'
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

function App() {
  const location = useLocation();
  const isTopScorePage = location.pathname.includes("topscore");

  return (
    <>
      <Header />
      <main className={`main ${isTopScorePage ? 'topscore' : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App