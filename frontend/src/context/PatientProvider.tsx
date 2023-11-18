import React, { FC } from 'react';
import { PatientContext } from './PatientContext';
import { usePatient } from '../hooks/usePatient';

interface PatientProviderProps {
    children: React.ReactNode;
}

export const PatientProvider: FC<PatientProviderProps> = ({ children }) => {
  const patientContextValue = usePatient();

  return (
    <PatientContext.Provider value={patientContextValue}>
      {children}
    </PatientContext.Provider>
  );
};