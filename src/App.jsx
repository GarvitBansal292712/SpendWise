
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Transaction from './pages/Transaction'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter basename='/'>

     <Navbar/>
     <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/transaction" element={<Transaction/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
