/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { usePatient } from '../hooks';
import PatientCard from './PacienteCard/PatientCard';

export default function Teste() {
  const { patients, getAll } = usePatient();

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </div>
  );
}