import { IDoctorRepository } from '@domain/repositories/IDoctorRepository';
import { AppError } from '@presentation/errors/AppError';

export class DeleteDoctorUseCase {
  constructor(private doctorRepository: IDoctorRepository) {}

  async execute(id: string): Promise<void> {
    const doctor = await this.doctorRepository.findById(id);

    if (!doctor) {
      throw new AppError('Doctor not found', 404);
    }

    await this.doctorRepository.delete(id);
  }
}

export default DeleteDoctorUseCase;
