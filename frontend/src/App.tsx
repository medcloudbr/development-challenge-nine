import { Route, Routes } from 'react-router-dom'
import './App.css'
import PatientProvider from './context/PatientProvider'
import Teste from './components/Teste'

function App() {


  return (
    <PatientProvider>
      <Routes>
        <Route path='/' element={<Teste />} />
      </Routes>
    </PatientProvider>
  )
}

export default App
