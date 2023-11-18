import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PatientProvider } from './context/PatientProvider.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <PatientProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </PatientProvider>
)
