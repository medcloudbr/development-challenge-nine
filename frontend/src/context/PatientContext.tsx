import { createContext, Dispatch, SetStateAction } from 'react';
import { IPatientWithAddress } from '../interfaces';

export interface IPatientContext {
  patients: IPatientWithAddress[];
  setPatients: Dispatch<SetStateAction<IPatientWithAddress[]>>;
  wasPatientDeleted: boolean;
  setWasPatientDeleted: Dispatch<SetStateAction<boolean>>;
  getAll: () => Promise<void>;
  getById: (id: number) => Promise<IPatientWithAddress[]>;
  create: (patient: IPatientWithAddress) => Promise<IPatientWithAddress>;
  update: (patient: IPatientWithAddress, id: number) => Promise<IPatientWithAddress>;
  remove: (id: number) => Promise<void>;
}

export const PatientContext = createContext<IPatientContext | undefined>(undefined);