import AdminRepository from '@infra/database/repositories/AdminRepository';
import { UpdateAdminDTO } from '../dtos/UpdateAdminDTO';
import Admin from '@domain/entities/Admin';
import { AppError } from '@presentation/errors/AppError';
import { hash } from 'bcryptjs';

export class UpdateAdminUseCase {
  constructor(private adminRepository: AdminRepository) {}

  async execute(data: UpdateAdminDTO): Promise<Admin> {
    const { id, name, email, password } = data;

    const admin = await this.adminRepository.findById(id);

    if (!admin) {
      throw new AppError('Admin not found.', 404);
    }

    if (email && email !== admin.email) {
      const emailInUse = await this.adminRepository.findByEmail(email);

      if (emailInUse) {
        throw new AppError('Email already in use.', 409);
      }

      admin.email = email;
    }

    if (name) {
      admin.name = name;
    }

    if (password) {
      const hashedPassword = await hash(password, 10);
      admin.password = hashedPassword;
    }

    return this.adminRepository.update(admin);
  }
}

export default UpdateAdminUseCase;
