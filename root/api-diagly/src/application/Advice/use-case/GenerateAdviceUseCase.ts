import MedicalDataRepository from '@infra/database/repositories/MedicalDataRepository';
import { PredictionRepository } from '@infra/database/repositories/PredictionRepository';
import AdviceService from '../service/AdviceService';
import { AdviceRequestDTO, AdviceResponseDTO } from '../dto/AdviceRequestDTO';
import { AppError } from '@presentation/errors/AppError';

export class GenerateAdviceUseCase {
  constructor(
    private medicalDataRepository: MedicalDataRepository,
    private predictionRepository: PredictionRepository,
    private adviceService: AdviceService
  ) {}

  async execute(patientId: string): Promise<AdviceResponseDTO> {
    const medicalData =
      await this.medicalDataRepository.findByPatientId(patientId);

    if (!medicalData) {
      throw new AppError('Medical data not found for the patient', 404);
    }

    const prediction =
      await this.predictionRepository.findLatestByPatientId(patientId);

    if (!prediction) {
      throw new AppError('Prediction data not found for the patient', 404);
    }

    const request: AdviceRequestDTO = {
      patientName: medicalData.patientId.name,
      age: medicalData.age,
      gender: medicalData.patientId.gender,
      medicalData: {
        urea: medicalData.urea,
        cr: medicalData.cr,
        hba1c: medicalData.hba1c,
        chol: medicalData.chol,
        tg: medicalData.tg,
        hdl: medicalData.hdl,
        ldl: medicalData.ldl,
        vldl: medicalData.vldl,
        bmi: medicalData.bmi,
      },
      prediction: {
        result: prediction.predictionResult,
        confidenceScore: prediction.confidenceScore,
      },
    };

    return this.adviceService.generateAdvice(request);
  }
}

export default GenerateAdviceUseCase;
