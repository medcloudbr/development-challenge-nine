import React, { createContext, useState } from 'react'
import { PatientContextType } from './PatientContext'
import { IPatientWithAddress } from '../interfaces/IPatientWithAddress'
import fetch from '../utils/api/fetch'

export const PatientContext = createContext<PatientContextType | null>(null)

interface PatientProviderProps {
    children: React.ReactNode
}
const PatientProvider = ({ children }: PatientProviderProps) => {
    const [patients, setPatients] = useState<IPatientWithAddress[] | IPatientWithAddress>([]);

    const getPatients = async () => {
        const response = await fetch.get<IPatientWithAddress[]>('/patients');
        setPatients(response.data);
        return response.data;
    }



    const contextValue = {
        patients,
        getPatients,
    }
    return (
        <PatientContext.Provider
            value={contextValue}
        >
            {children}
        </PatientContext.Provider>
    )
}

export default PatientProvider;
