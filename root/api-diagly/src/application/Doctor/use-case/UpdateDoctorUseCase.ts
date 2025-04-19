import { IDoctorRepository } from '@domain/repositories/IDoctorRepository';
import { UpdateDoctorDTO } from '../dtos/UpdateDoctorDTO';
import Doctor from '@domain/entities/Doctors';
import { AppError } from '@presentation/errors/AppError';
import { hash } from 'bcryptjs';

export class UpdateDoctorUseCase {
  constructor(private doctorRepository: IDoctorRepository) {}

  async execute(data: UpdateDoctorDTO): Promise<Doctor> {
    const { id, name, email, password } = data;

    const doctor = await this.doctorRepository.findById(id);

    if (!doctor) {
      throw new AppError('Doctor not found.', 404);
    }

    if (email && email !== doctor.email) {
      const emailInUse = await this.doctorRepository.findByEmail(email);
      if (emailInUse) {
        throw new AppError('Email already in use', 409);
      }
      doctor.email = email;
    }

    if (name) {
      doctor.name = name;
    }

    if (password) {
      const hashedPassword = await hash(password, 10);
      doctor.password = hashedPassword;
    }

    return this.doctorRepository.update(doctor);
  }
}

export default UpdateDoctorUseCase;
