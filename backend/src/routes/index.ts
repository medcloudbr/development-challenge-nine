import { Router } from "express";
import patientRouter from "./patient.routes";

const router = Router();

router.use('/patient', patientRouter);

export default router;