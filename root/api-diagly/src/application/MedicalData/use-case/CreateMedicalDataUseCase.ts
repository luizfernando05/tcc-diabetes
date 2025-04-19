import { IMedicalDataRepository } from '@domain/repositories/IMedicalDataRepository';
import { IPatientRepository } from '@domain/repositories/IPatientRepository';
import { CreateMedicalDataDTO } from '../dto/CreateMedicalDataDTO';
import MedicalData from '@domain/entities/MedicalData';
import { AppError } from '@presentation/errors/AppError';

export class CreateMedicalDataUseCase {
  constructor(
    private medicalDataRepository: IMedicalDataRepository,
    private patientRepository: IPatientRepository
  ) {}

  async execute(data: CreateMedicalDataDTO): Promise<MedicalData> {
    const { patientId } = data;

    const patient = await this.patientRepository.findById(patientId);

    if (!patient) {
      throw new AppError('Patient not found.', 400);
    }

    const existingData =
      await this.medicalDataRepository.findByPatientId(patientId);

    if (existingData) {
      throw new AppError('Medical data for this patient already exists.');
    }

    const medicalData = new MedicalData();
    Object.assign(medicalData, data);

    return this.medicalDataRepository.create(medicalData);
  }
}

export default CreateMedicalDataUseCase;
