import GetByIdMedicalDataUseCase from '@application/MedicalData/use-case/GetByIdMedicalDataUseCase';
import MedicalDataRepository from '@infra/database/repositories/MedicalDataRepository';
import { NextFunction, Request, Response } from 'express';

export class GetByIdMedicalDataController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;

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
