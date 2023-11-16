import { Route, Routes } from 'react-router-dom'
import './App.css'
import PatientProvider from './context/PatientProvider'
import Home from './pages/Home'

function App() {


  return (
    <PatientProvider>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </PatientProvider>
  )
}

export default App
