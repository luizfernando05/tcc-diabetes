import Admin from '@domain/entities/Admin';
import { IAdminRepository } from '@domain/repositories/IAdminRepository';
import { AppError } from '@presentation/errors/AppError';

export class GetAdminByIdUseCase {
  constructor(private adminRepository: IAdminRepository) {}

  async execute(id: string): Promise<Admin> {
    const admin = await this.adminRepository.findById(id);

    if (!admin) {
      throw new AppError('Admin not found.', 404);
    }

    return admin;
  }
}

export default GetAdminByIdUseCase;
