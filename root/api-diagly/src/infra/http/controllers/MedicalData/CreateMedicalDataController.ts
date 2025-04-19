import CreateMedicalDataUseCase from '@application/MedicalData/use-case/CreateMedicalDataUseCase';
import MedicalDataRepository from '@infra/database/repositories/MedicalDataRepository';
import PatientRepository from '@infra/database/repositories/PatientRepository';
import { NextFunction, Request, Response } from 'express';

export class CreateMedicalDataController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { patientId, age, urea, cr, hba1c, chol, tg, hdl, ldl, vldl, bmi } =
        req.body;

      const medicalDataRepository = new MedicalDataRepository();
      const patientRepository = new PatientRepository();
      const createMedicalDataUseCase = new CreateMedicalDataUseCase(
        medicalDataRepository,
        patientRepository
      );

      const medicalData = await createMedicalDataUseCase.execute({
        patientId,
        age,
        urea,
        cr,
        hba1c,
        chol,
        tg,
        hdl,
        ldl,
        vldl,
        bmi,
      });

      return res.status(201).json(medicalData);
    } catch (err) {
      next(err);
    }
  }
}

export default CreateMedicalDataController;
