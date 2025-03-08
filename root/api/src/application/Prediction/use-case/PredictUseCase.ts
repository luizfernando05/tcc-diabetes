import { IPredictionRepository } from '@domain/repositories/IPredictionRepository';
import PredictionService from '../service/PredictionService';
import { IMedicalDataRepository } from '@domain/repositories/IMedicalDataRepository';
import { IPatientRepository } from '@domain/repositories/IPatientRepository';
import { PredictionResponseDTO } from '../dto/PredictionRequestDTO';
import { AppError } from '@presentation/errors/AppError';
import Prediction from '@domain/entities/Prediction';

export class PredictUseCase {
  constructor(
    private predictionService: PredictionService,
    private predictionRepository: IPredictionRepository,
    private medicalDataRepository: IMedicalDataRepository,
    private patientRepository: IPatientRepository
  ) {}

  async execute({
    patientId,
    doctorId,
  }: {
    patientId: string;
    doctorId: string;
  }): Promise<PredictionResponseDTO> {
    const patient = await this.patientRepository.findById(patientId);
    if (!patient) {
      throw new AppError('Patient not found', 404);
    }

    const medicalData =
      await this.medicalDataRepository.findByPatientId(patientId);
    if (!medicalData) {
      throw new AppError('Medical data not found for the patient', 404);
    }

    const predictionData = {
      gender: patient.gender,
      age: medicalData.age,
      urea: medicalData.urea,
      cr: medicalData.cr,
      hba1c: medicalData.hba1c,
      chol: medicalData.chol,
      tg: medicalData.tg,
      hdl: medicalData.hdl,
      ldl: medicalData.ldl,
      vldl: medicalData.vldl,
      bmi: medicalData.bmi,
    };

    const predictionResponse =
      await this.predictionService.predict(predictionData);

    const prediction = new Prediction();
    prediction.patient = { id: patientId } as any;
    prediction.doctor = { id: doctorId } as any;
    prediction.predictionResult = predictionResponse.predictionResult;
    prediction.confidenceScore = predictionResponse.confidenceScore;

    await this.predictionRepository.create(prediction);

    return predictionResponse;
  }
}

export default PredictUseCase;
