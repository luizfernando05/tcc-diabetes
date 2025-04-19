import MedicalData from '@domain/entities/MedicalData';
import { IMedicalDataRepository } from '@domain/repositories/IMedicalDataRepository';
import { AppError } from '@presentation/errors/AppError';

export class GetByIdMedicalDataUseCase {
  constructor(private medicalDataRepository: IMedicalDataRepository) {}

  async execute(id: string): Promise<MedicalData> {
    const medicalData = await this.medicalDataRepository.findById(id);

    if (!medicalData) {
      throw new AppError('Medical data not found.', 404);
    }

    return medicalData;
  }
}

export default GetByIdMedicalDataUseCase;
