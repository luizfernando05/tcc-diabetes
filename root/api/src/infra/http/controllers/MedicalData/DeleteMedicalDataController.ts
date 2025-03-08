import DeleteMedicalDataUseCase from '@application/MedicalData/use-case/DeleteMedicalDataUseCase';
import MedicalDataRepository from '@infra/database/repositories/MedicalDataRepository';
import { NextFunction, Request, Response } from 'express';

export class DeleteMedicalDataController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;

      const medicalDataRepository = new MedicalDataRepository();
      const deleteMedicalDataUseCase = new DeleteMedicalDataUseCase(
        medicalDataRepository
      );

      await deleteMedicalDataUseCase.execute(id);

      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

export default DeleteMedicalDataController;
