import { Typography } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import Teste from '../../components/Teste';
import './Home.css';
import AddPatient from '../../components/AddPatient/AddPatient';

export default function Home() {
  return (
    <div className='home-div'>
      <NavBar />
      <div className='home-body'>
        <Typography variant='h4' className='title-element'>Pacientes</Typography>
        <Teste />
        <AddPatient />
      </div>
    </div>
  )
}
