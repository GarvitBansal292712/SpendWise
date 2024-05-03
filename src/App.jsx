
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Transaction from './pages/Transaction'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { TransactionProvider } from './context/ContextLogic'
function App() {

  return (
    <>
    <TransactionProvider>

    <BrowserRouter basename='/'>

     <Navbar/>
     <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/transaction" element={<Transaction/>}/>
     </Routes>
    </BrowserRouter>
    </TransactionProvider>
    </>
  )
}

export default App
