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

      const predictionLabels: { [key: number]: string } = {
        0: 'Diabetic',
        1: 'Pre-Diabect',
        2: 'Non-Diabect',
      };

      return res.status(200).json({
        predictionResult:
          predictionLabels[Number(result.predictionResult)] || 'Unknown',
        confidenceScore: result.confidenceScore,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default PredictionController;
