import { IAddress } from "../addresses/IAddress";

export interface IPatient {
    id: number;
    fullName: string;
    birthDate: Date;
    email: string;
}

export interface IPatientWithAddress extends IPatient {
    address: IAddress;
}