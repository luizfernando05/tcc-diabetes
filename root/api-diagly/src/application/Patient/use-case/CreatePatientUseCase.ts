import { IDoctorRepository } from '@domain/repositories/IDoctorRepository';
import { IPatientRepository } from '@domain/repositories/IPatientRepository';
import { CreatePatientDTO } from '../dto/CreatePatienntDTO';
import Patient from '@domain/entities/Patient';
import { AppError } from '@presentation/errors/AppError';
import { hash } from 'bcryptjs';

export class CreatePatientUseCase {
  constructor(
    private patientRepository: IPatientRepository,
    private doctorRepository: IDoctorRepository
  ) {}

  async execute(data: CreatePatientDTO): Promise<Patient> {
    const existingDoctor = await this.doctorRepository.findById(
      data.createdByDoctorId
    );

    if (!existingDoctor) {
      throw new AppError('Doctor not found.', 404);
    }

    const existingPatient = await this.patientRepository.findByEmail(
      data.email
    );

    if (existingPatient) {
      throw new AppError('Email already in use.', 409);
    }

    const hashedPassword = await hash(data.password, 10);

    const patient = new Patient();
    patient.name = data.name;
    patient.email = data.email;
    patient.password = hashedPassword;
    patient.birthDate = data.birthDate;
    patient.gender = data.gender;
    patient.createdByDoctor = { id: data.createdByDoctorId } as any;

    return this.patientRepository.create(patient);
  }
}

export default CreatePatientUseCase;
