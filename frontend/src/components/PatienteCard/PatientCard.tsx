import './PatientCard.css';
import { IPatientWithAddress } from '../../interfaces';
import { Button, Typography } from '@mui/material';
import { PersonRemove, EditRounded, PersonRounded } from '@mui/icons-material';

interface PatientCardProps {
  patient: IPatientWithAddress;
}

const mainPersonStyle = {
  fontSize: '50px',
  color: '#009adf',
};

export default function PatientCard(props: PatientCardProps) {
  const { patient } = props;


  return (
    <div className='patient-main-div' key={patient.id}>
      <PersonRounded style={mainPersonStyle} />
      <Typography>{patient.fullName}</Typography>
      <div className='patient-buttons-div'>
        <Button onClick={() => { }}
          style={{ color: mainPersonStyle.color }}
        >
          Editar
          <EditRounded />
        </Button>
        <Button onClick={() => { }}
          style={{ color: mainPersonStyle.color }}
        >
          Remover
          <PersonRemove />
        </Button>
      </div>
    </div>
  );
}