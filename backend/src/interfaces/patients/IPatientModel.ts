import { IPatient } from "./IPatient";
import { NewEntity } from "..";

export interface IPatientModel {
    create(data: Partial<IPatient>): Promise<IPatient>,
    findAll(): Promise<IPatient[]>,
    findById(id: IPatient['id']): Promise<IPatient | null>
    update(id: IPatient['id'], data: Partial<NewEntity<IPatient>>): Promise<IPatient | null>,
    delete(id: IPatient['id']): Promise<number>,
}