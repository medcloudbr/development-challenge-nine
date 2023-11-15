import { IPatientWithAddress } from "../interfaces";
import { Api } from "../providers"

const patientRoute = 'patient';

const getAll = () => Api.get<IPatientWithAddress[]>(patientRoute);

const getById = (id: number) => Api.get<IPatientWithAddress[]>(`${patientRoute}/${id}`);

const create = (patient: IPatientWithAddress) => Api.post<IPatientWithAddress>(patientRoute, patient);

const update = (patient: IPatientWithAddress) => Api.put<IPatientWithAddress>(patientRoute, patient);

const remove = (id: number) => Api.delete<IPatientWithAddress>(`${patientRoute}/${id}`);

export const patientService = {
    getAll,
    getById,
    create,
    update,
    remove
}