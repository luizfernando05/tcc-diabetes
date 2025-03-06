import { IPatientRepository } from '@domain/repositories/IPatientRepository';
import { UpdatePatientDTO } from '../dto/UpdatePatientDTO';
import Patient from '@domain/entities/Patient';
import { AppError } from '@presentation/errors/AppError';
import { hash } from 'bcryptjs';

export class UpdatePatientUseCase {
  constructor(private patientRepository: IPatientRepository) {}

  async execute(data: UpdatePatientDTO): Promise<Patient> {
    const { id, name, email, password, birthDate, gender } = data;

    const patient = await this.patientRepository.findById(id);

    if (!patient) {
      throw new AppError('Patient not found', 404);
    }

    if (email && email !== patient.email) {
      const emailInUse = await this.patientRepository.findByEmail(email);
      if (emailInUse) {
        throw new AppError('Email already in use', 409);
      }
      patient.email = email;
    }

    if (name) {
      patient.name = name;
    }

    if (password) {
      const hashedPassword = await hash(password, 10);
      patient.password = hashedPassword;
    }

    if (birthDate) {
      patient.birthDate = birthDate;
    }

    if (gender) {
      patient.gender = gender;
    }

    return this.patientRepository.update(patient);
  }
}

export default UpdatePatientUseCase;
