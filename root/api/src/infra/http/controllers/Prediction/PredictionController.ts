import PredictionService from '@application/Prediction/service/PredictionService';
import PredictUseCase from '@application/Prediction/use-case/PredictUseCase';
import MedicalDataRepository from '@infra/database/repositories/MedicalDataRepository';
import PatientRepository from '@infra/database/repositories/PatientRepository';
import { PredictionRepository } from '@infra/database/repositories/PredictionRepository';
import { NextFunction, Request, Response } from 'express';

export class PredictionController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { doctorId, patientId } = req.body;

      const predictUseCase = new PredictUseCase(
        new PredictionService(),
        new PredictionRepository(),
        new MedicalDataRepository(),
        new PatientRepository()
      );

      const result = await predictUseCase.execute({ doctorId, patientId });

      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}

export default PredictionController;
