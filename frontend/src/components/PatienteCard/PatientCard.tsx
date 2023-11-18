import './PatientCard.css';
import { IPatientWithAddress } from '../../interfaces';
import { Button, Typography } from '@mui/material';
import { PersonRemove, EditRounded, PersonRounded } from '@mui/icons-material';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PatientContext } from '../../context/PatientContext';

interface PatientCardProps {
  patient: IPatientWithAddress;
}

const mainPersonStyle = {
  fontSize: '50px',
  color: '#009adf',
};

export default function PatientCard(props: PatientCardProps) {
  const { patient } = props;
  const patientContext = useContext(PatientContext);
  const navigate = useNavigate();

  const handleDeleteClick = async () => {
    const result = await Swal.fire({
      title: 'Remover paciente',
      text: `Deseja remover o paciente ${patient.fullName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      confirmButtonColor: '#009adf',
      cancelButtonColor: '#f44336',
    });

    if (result.isConfirmed) {
      try {
        await patientContext?.remove(patient.id);
        navigate('/test');

        Swal.fire({
          title: 'Removido!',
          text: `O paciente ${patient.fullName} foi removido com sucesso!`,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          title: 'Erro!',
          text: `Houve um erro ao remover o paciente ${patient.fullName}.`,
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/test')
        patientContext?.getAll();
      } 
    }    
  };

  const handleEditClick = () => {
    navigate(`/edit/${patient.id}`);
  };


  return (
    <div className='patient-main-div' key={patient.id}>
      <div className='patient-picture-div'>
        <PersonRounded style={mainPersonStyle} />
      </div>
      <Typography style={{
        minWidth: '200px',
        textAlign: 'center',
      }}>{patient.fullName}</Typography>
      <div className='patient-buttons-div'>
        <Button onClick={handleEditClick}
          style={{ color: mainPersonStyle.color }}
        >
          Editar
          <EditRounded style={{ marginLeft: '10px' }} />
        </Button>
        <Button onClick={handleDeleteClick}
          style={{ color: mainPersonStyle.color }}
        >
          Remover
          <PersonRemove style={{ marginLeft: '10px' }} />
        </Button>
      </div>
    </div>
  );
}