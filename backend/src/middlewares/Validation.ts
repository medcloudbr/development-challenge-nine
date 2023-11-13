import { Request, Response, NextFunction } from "express";

class Validations {
    static validatePatient(req: Request, res: Response, next: NextFunction): Response | void {
        const patient = req.body;
        const requiredKeys = ['fullName', 'birthDate', 'email'];
        const notFoundKeys = requiredKeys.find((key) => !(key in patient));
        if (notFoundKeys) {
            return res.status(400).json({ message: `Missing required field: ${notFoundKeys}` });
        }

        next();
    }
}

export default Validations;