import Admin from '@domain/entities/Admin';
import AdminRepository from '@infra/database/repositories/AdminRepository';
import { AppError } from '@presentation/errors/AppError';

export class GetAdminByIdUseCase {
  constructor(private adminRepository: AdminRepository) {}

  async execute(id: string): Promise<Admin> {
    const admin = await this.adminRepository.findById(id);

    if (!admin) {
      throw new AppError('Admin not found.', 404);
    }

    return admin;
  }
}

export default GetAdminByIdUseCase;
