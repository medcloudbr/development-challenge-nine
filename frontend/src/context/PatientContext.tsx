import { IPatientWithAddress } from "../interfaces/IPatientWithAddress";

export type PatientContextType = {
    patients: IPatientWithAddress | IPatientWithAddress[];
    getPatients: () => Promise<IPatientWithAddress[]>;
    // getPatientById: (id: number) => Promise<IPatientWithAddress>;
    // putPatient: (patient: IPatientWithAddress) => Promise<object>;
    // postPatient: (patient: IPatientWithAddress) => Promise<IPatientWithAddress>;
    // deletePatient: (id: number) => Promise<object>;
};
