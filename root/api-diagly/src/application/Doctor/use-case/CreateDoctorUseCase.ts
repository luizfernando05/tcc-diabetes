import { IAdminRepository } from '@domain/repositories/IAdminRepository';
import { IDoctorRepository } from '@domain/repositories/IDoctorRepository';
import { CreateDoctorDTO } from '../dtos/CreateDoctorDTO';
import { AppError } from '@presentation/errors/AppError';
import { hash } from 'bcryptjs';
import Doctor from '@domain/entities/Doctors';

export class CreateDoctorUseCase {
  constructor(
    private doctorRepository: IDoctorRepository,
    private adminRepository: IAdminRepository
  ) {}

  async execute(data: CreateDoctorDTO): Promise<Doctor> {
    const existingAdmin = await this.adminRepository.findById(
      data.createdByAdminId
    );

    if (!existingAdmin) {
      throw new AppError('Admin not found.', 404);
    }

    const existingDoctor = await this.doctorRepository.findByEmail(data.email);

    if (existingDoctor) {
      throw new AppError('Email already in use.', 409);
    }

    const hashedPassword = await hash(data.password, 10);

    const doctor = new Doctor();
    doctor.name = data.name;
    doctor.email = data.email;
    doctor.password = hashedPassword;
    doctor.createdByAdmin = { id: data.createdByAdminId } as any;

    return this.doctorRepository.create(doctor);
  }
}

export default CreateDoctorUseCase;
