import { Request, Response, Router } from "express";
import PatientController from "../controllers/PatientController";
import Validations from "../middlewares/Validation";

const patientController = new PatientController();

const router = Router();

router.post('/', Validations.validatePatient, (req: Request, res: Response) => patientController.createPatient(req, res));
router.get('/', (req: Request, res: Response) => patientController.getAllPatients(req, res));
router.get('/:id', (req: Request, res: Response) => patientController.getPatientById(req, res));
router.put('/:id', Validations.validatePatient, (req: Request, res: Response) => patientController.updatePatient(req, res));
router.delete('/:id', (req: Request, res: Response) => patientController.deletePatient(req, res));

export default router;

