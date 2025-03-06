import Doctor from '@domain/entities/Doctors';
import { IDoctorRepository } from '@domain/repositories/IDoctorRepository';

export class ListDoctorUseCase {
  constructor(private doctorRepository: IDoctorRepository) {}

  async execute(): Promise<Doctor[]> {
    return this.doctorRepository.findAll();
  }
}

export default ListDoctorUseCase;
