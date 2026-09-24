import {BrowserRouter as Router,Routes,Route }from 'react-router-dom'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {GameCard} from './components/GameCard'
import {Home} from './pages/Home'
import {Jogos} from './pages/Jogos'
import {Login} from './pages/Login'
import {Error} from './pages/Error'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen flex flex-col justify-between bg-black text-white' pt-4>
        <Header>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/jogos' element={<Jogos/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Routes>
          <Footer></Footer>
        </Header>
      </div>
      
    </Router>
  )
}

export default App
