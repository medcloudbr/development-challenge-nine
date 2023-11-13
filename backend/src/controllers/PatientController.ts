import { Request, Response } from 'express';
import PatientService from '../services/PatientService';

import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class PatientController {
    constructor(
        private patientService = new PatientService(),
    ) { }

    public async createPatient(req: Request, res: Response) {
        const serviceResponse = await this.patientService.createPatient(req.body);
        res.status(201).json(serviceResponse);
    }

    public async getAllPatients(req: Request, res: Response) {
        const serviceResponse = await this.patientService.getAllPatients();
        res.status(200).json(serviceResponse);
    }

    public async getPatientById(req: Request, res: Response) {
        const { id } = req.params;

        const serviceResponse = await this.patientService.getPatientById(Number(id));

        if (serviceResponse.status !== 'SUCCESSFUL') {
            return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
        }

        res.status(200).json(serviceResponse.data);
    }

    public async updatePatient(req: Request, res: Response): Promise<Response> {
        const id = Number(req.params.id);
        const book = req.body;
        const serviceResponse = await this.patientService.updatePatient(id, book);
    
        if (serviceResponse.status !== 'SUCCESSFUL') {
          return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
        }
    
        return res.status(200).json(serviceResponse.data);
      }

    public async deletePatient(req: Request, res: Response): Promise<Response> {
        const id = Number(req.params.id);
        const serviceResponse = await this.patientService.deletePatient(id);

        if (serviceResponse.status !== 'SUCCESSFUL') {
            return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
        }

        return res.status(200).json(serviceResponse.data);
    }
}