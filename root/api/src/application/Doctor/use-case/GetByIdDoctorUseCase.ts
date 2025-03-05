import Doctor from '@domain/entities/Doctors';
import { IDoctorRepository } from '@domain/repositories/IDoctorRepository';
import { AppError } from '@presentation/errors/AppError';

export class GetByDoctorIdUseCase {
  constructor(private doctorRepository: IDoctorRepository) {}

  async execute(id: string): Promise<Doctor> {
    const doctor = await this.doctorRepository.findById(id);

    if (!doctor) {
      throw new AppError('Doctor not found.', 404);
    }

    return doctor;
  }
}

export default GetByDoctorIdUseCase;
