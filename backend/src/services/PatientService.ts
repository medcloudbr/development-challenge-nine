import { NewEntity } from "../interfaces";
import PatientModel from "../models/PatientModel";
import { IPatient } from "../interfaces/patients/IPatient";
import { IPatientModel } from "../interfaces/patients/IPatientModel";
import { ServiceMessage, ServiceResponse } from "../interfaces/ServiceResponse";

export default class PatientService {
    constructor(
        private patientModel: IPatientModel = new PatientModel()
    ) { }

    public async createPatient(patient: NewEntity<IPatient>): Promise<ServiceResponse<IPatient>> {
        const newPatient = await this.patientModel.create(patient);
        return {
            status: 'SUCCESSFUL',
            data: newPatient
        };
    }

    public async getAllPatients(): Promise<ServiceResponse<IPatient[]>> {
        const allPatients = await this.patientModel.findAll();
        return {
            status: 'SUCCESSFUL',
            data: allPatients
        };
    }

    public async getPatientById(id: number): Promise<ServiceResponse<IPatient>> {
        const patient = await this.patientModel.findById(id);
        if (!patient) return { status: 'NOT_FOUND', data: { message: `Patient ${id} not found` } };
        return { status: 'SUCCESSFUL', data: patient };
    }

    public async updatePatient(id: number, patient: IPatient): Promise<ServiceResponse<ServiceMessage>> {
        const patientFound = await this.patientModel.findById(id);
        if (!patientFound) return { status: 'NOT_FOUND', data: { message: `Patient ${id} not found` } };

        const updatePatient = await this.patientModel.update(id, patient);
        if (!updatePatient) {
            return {
                status: 'CONFLICT',
                data: { message: `There are no updates to perform in Patient ${id}` }
            };
        }
        return { status: 'SUCCESSFUL', data: { message: 'Patient updated' } };
    }

    public async deletePatient(id: number): Promise<ServiceResponse<ServiceMessage>> {
        const patientFound = await this.patientModel.findById(id);
        if (!patientFound) return { status: 'NOT_FOUND', data: { message: `Patient ${id} not found` } };

        await this.patientModel.delete(id);
        return { status: 'SUCCESSFUL', data: { message: 'Patient deleted' } };
    }
}