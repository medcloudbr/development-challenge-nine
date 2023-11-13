import { IPatient, IPatientWithAddress } from "./IPatient";
import { NewEntity } from "..";

export interface IPatientModel {
    create(data: Partial<IPatientWithAddress>): Promise<IPatientWithAddress>,
    findAll(): Promise<IPatientWithAddress[]>,
    findById(id: IPatientWithAddress['id']): Promise<IPatientWithAddress | null>
    update(id: IPatient['id'], data: Partial<NewEntity<IPatientWithAddress>>): Promise<IPatientWithAddress | null>,
    delete(id: IPatient['id']): Promise<number>,
}