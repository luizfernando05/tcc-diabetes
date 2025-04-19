import Patient from '@domain/entities/Patient';
import { IPatientRepository } from '@domain/repositories/IPatientRepository';

export class ListPatientUseCase {
  constructor(private patientRepository: IPatientRepository) {}

  async execute(): Promise<Patient[]> {
    return this.patientRepository.findAll();
  }
}

export default ListPatientUseCase;
