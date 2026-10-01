import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import GameCard from './components/GameCard'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Jogos from './pages/Jogos'
import Login from './pages/Login'
import ErrorPage from './pages/error'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen flex flex-col justify-between bg-black text-white pt-4'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contato' element={<Contato />}></Route>
          <Route path='/jogos' element={<Jogos />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </div>

    </Router>
  )
}

export default App
