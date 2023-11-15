import { Route, Routes } from 'react-router-dom'
import './App.css'
import PatientProvider from './context/PatientProvider'
// import Teste from './components/Teste'
import Form from './components/Form'

function App() {


  return (
    <PatientProvider>
      <Routes>
        <Route path='/' element={<Form />} />
      </Routes>
    </PatientProvider>
  )
}

export default App
