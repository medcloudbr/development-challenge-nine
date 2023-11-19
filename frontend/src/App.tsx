import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import EditPatient from './pages/EditPatient/EditPatient'
import CreatePatient from './pages/CreatePatient/CreatePatient'
import PatientDetails from './pages/PatientDetails/PatientDetails'
function App() {


  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/add' element={<CreatePatient />} />
        <Route path='/details/:id' element={<PatientDetails />} />
        <Route path='/edit/:id' element={<EditPatient />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
  )
}

export default App
