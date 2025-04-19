import { IAdminRepository } from '@domain/repositories/IAdminRepository';
import { CreateAdminDTO } from '../dtos/CreateAdminDTO';
import Admin from '@domain/entities/Admin';
import { AppError } from '@presentation/errors/AppError';
import { hash } from 'bcryptjs';

export class CreateAdminUseCase {
  constructor(private adminRepository: IAdminRepository) {}

  async execute(data: CreateAdminDTO): Promise<Admin> {
    const existingAdmin = await this.adminRepository.findByEmail(data.email);

    if (existingAdmin) {
      throw new AppError('Email already in use.', 409);
    }

    const hashedPassword = await hash(data.password, 10);

    const admin = new Admin();
    admin.name = data.name;
    admin.email = data.email;
    admin.password = hashedPassword;

    return this.adminRepository.create(admin);
  }
}

export default CreateAdminUseCase;
