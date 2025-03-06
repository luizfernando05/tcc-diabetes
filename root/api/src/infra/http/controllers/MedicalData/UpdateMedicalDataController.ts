import UpdateMedicalDataUseCase from '@application/MedicalData/use-case/UpdateMedicalDataUseCase';
import MedicalDataRepository from '@infra/database/repositories/MedicalDataRepository';
import { AppError } from '@presentation/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class UpdateMedicalDataController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;
      const { age, urea, cr, hba1c, chol, tg, hdl, ldl, vldl, bmi } = req.body;

      if (!id || !yup.string().uuid().isValidSync(id)) {
        throw new AppError('Invalid ID.', 400);
      }

      const medicalDataRepository = new MedicalDataRepository();
      const updateMedicalDataUseCase = new UpdateMedicalDataUseCase(
        medicalDataRepository
      );

      const updatedMedicalData = await updateMedicalDataUseCase.execute({
        id,
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

      return res.status(200).json(updatedMedicalData);
    } catch (err) {
      next(err);
    }
  }
}

export default UpdateMedicalDataController;
