import GetByIdMedicalDataUseCase from '@application/MedicalData/use-case/GetByIdMedicalDataUseCase';
import MedicalDataRepository from '@infra/database/repositories/MedicalDataRepository';
import { AppError } from '@presentation/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class GetByIdMedicalDataController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;

      if (!id || !yup.string().uuid().isValidSync(id)) {
        throw new AppError('Invalid ID.', 400);
      }

      const medicalDataRepository = new MedicalDataRepository();
      const getByIdMedicalDataUseCase = new GetByIdMedicalDataUseCase(
        medicalDataRepository
      );

      const medicalData = await getByIdMedicalDataUseCase.execute(id);

      return res.status(200).json(medicalData);
    } catch (err) {
      next(err);
    }
  }
}

export default GetByIdMedicalDataController;
