import { IMedicalDataRepository } from '@domain/repositories/IMedicalDataRepository';
import { AppError } from '@presentation/errors/AppError';

export class DeleteMedicalDataUseCase {
  constructor(private medicalDataRepository: IMedicalDataRepository) {}

  async execute(id: string): Promise<void> {
    const existingData = await this.medicalDataRepository.findById(id);

    if (!existingData) {
      throw new AppError('Medical data not found', 404);
    }

    await this.medicalDataRepository.delete(id);
  }
}

export default DeleteMedicalDataUseCase;
