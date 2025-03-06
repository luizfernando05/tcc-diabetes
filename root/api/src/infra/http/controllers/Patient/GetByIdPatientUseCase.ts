import Patient from '@domain/entities/Patient';
import { IPatientRepository } from '@domain/repositories/IPatientRepository';
import { AppError } from '@presentation/errors/AppError';

export class GetByIdPatientUseCase {
  constructor(private patientRepository: IPatientRepository) {}

  async execute(id: string): Promise<Patient> {
    const patient = await this.patientRepository.findById(id);

    if (!patient) {
      throw new AppError('Patient not found.', 404);
    }

    return patient;
  }
}

export default GetByIdPatientUseCase;
