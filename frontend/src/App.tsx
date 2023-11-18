import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Home from './pages/Home'
import Teste from './components/Teste'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import EditPatient from './pages/EditPatient/EditPatient'
import CreatePatient from './pages/CreatePatient/CreatePatient'
function App() {


  return (
      <Routes>
        <Route path='/' element={<Teste />} />
        <Route path='/test' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/add' element={<CreatePatient />} />
        <Route path='/details/:id' element={<Teste />} />
        <Route path='/edit/:id' element={<EditPatient />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
  )
}

export default App
