import { Request, Response, NextFunction } from "express";

class PrimeValidationClass {
    public getList = (req: Request, res: Response, next: NextFunction) => {
        const end = +req.params.end;
        // Input Validation

        if (!Number.isInteger(end)) {
            res.status(400).json({ error: "end must be an integer" });
            return
        }
        if (+end < 2) {
            res.status(400).json({ error: "end must be greater or equal than 2" });
            return
        }
        // If ok, next
        if (end) {
            next();
            return
        }
    }
}

export const PrimeValidation = new PrimeValidationClass();