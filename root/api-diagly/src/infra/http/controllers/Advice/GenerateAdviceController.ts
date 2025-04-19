import AdviceService from '@application/Advice/service/AdviceService';
import GenerateAdviceUseCase from '@application/Advice/use-case/GenerateAdviceUseCase';
import MedicalDataRepository from '@infra/database/repositories/MedicalDataRepository';
import { PredictionRepository } from '@infra/database/repositories/PredictionRepository';
import { NextFunction, Request, Response } from 'express';

export class GenerateAdviceController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { patientId } = req.params;

      const medicalDataRepository = new MedicalDataRepository();
      const predictionRepository = new PredictionRepository();
      const adviceService = new AdviceService();

      const generateAdviceUseCase = new GenerateAdviceUseCase(
        medicalDataRepository,
        predictionRepository,
        adviceService
      );

      const advice = await generateAdviceUseCase.execute(patientId);

      return res.status(200).json(advice);
    } catch (err) {
      next(err);
    }
  }
}

export default GenerateAdviceController;
