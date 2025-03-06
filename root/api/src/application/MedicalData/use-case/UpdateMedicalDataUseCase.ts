import { IMedicalDataRepository } from '@domain/repositories/IMedicalDataRepository';
import { UpdateMedicalDataDTO } from '../dto/UpdateMedicalDataDTO';
import MedicalData from '@domain/entities/MedicalData';
import { AppError } from '@presentation/errors/AppError';

export class UpdateMedicalDataUseCase {
  constructor(private medicalDataRepository: IMedicalDataRepository) {}

  async execute(data: UpdateMedicalDataDTO): Promise<MedicalData> {
    const { id } = data;

    const existingData = await this.medicalDataRepository.findById(id);
    if (!existingData) {
      throw new AppError('Medical data not found', 404);
    }

    Object.assign(existingData, data);

    return this.medicalDataRepository.update(existingData);
  }
}

export default UpdateMedicalDataUseCase;
