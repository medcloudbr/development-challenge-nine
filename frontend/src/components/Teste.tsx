import { useContext, useEffect } from 'react';
import PatientCard from './PatienteCard/PatientCard';
import { PatientContext } from '../context/PatientContext';

export default function Teste() {
  const patientContext = useContext(PatientContext);
  useEffect(() => {
    patientContext?.getAll();
  }, [patientContext?.wasPatientDeleted]);

  return (
    <div className='patient-list-div'>
      {patientContext?.patients.sort((a, b) => a.fullName.localeCompare(b.fullName))
        .map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
    </div>
  );
}