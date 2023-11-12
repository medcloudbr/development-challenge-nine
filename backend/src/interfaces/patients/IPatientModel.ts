import { IPatient } from "./IPatient";

export interface IPatientModel {
    create(data: Partial<IPatient>): Promise<IPatient>,
}