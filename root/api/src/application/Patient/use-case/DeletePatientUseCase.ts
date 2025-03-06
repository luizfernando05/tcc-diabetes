import PatientRepository from '@infra/database/repositories/PatientRepository';
import { AppError } from '@presentation/errors/AppError';

export class DeletePatientUseCase {
  constructor(private patientRepository: PatientRepository) {}

  async execute(id: string): Promise<void> {
    const patient = this.patientRepository.findById(id);

    if (!patient) {
      throw new AppError('Patient not found.', 404);
    }

    await this.patientRepository.delete(id);
  }
}
