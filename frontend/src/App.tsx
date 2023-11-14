import { Route, Routes } from 'react-router-dom'
import './App.css'
import Teste from './teste'
import ThemeProvider from './context/ThemeProvider'

function App() {


  return (
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<Teste />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
