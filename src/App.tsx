import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HomePage } from './pages/HomePage/HomePage'

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <HomePage />
      </main>
      <Footer />
    </>
  )
}

export default App
