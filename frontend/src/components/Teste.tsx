import React, { useEffect } from 'react'
import { usePatient } from '../hooks';

export default function Teste() {
  const { patients, getAll, getById } = usePatient();

  useEffect(() => {
    getAll();
    getById(1);
  }, []);

  return (
    <div>{patients.map((patient) => <div key={patient.id}>
      Nome:
      {patient.fullName}
      <br />
    </div>)}</div>
  )
}
