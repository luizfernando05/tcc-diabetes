import { IAdminRepository } from '@domain/repositories/IAdminRepository';
import { AppError } from '@presentation/errors/AppError';

export class DeleteAdminUseCase {
  constructor(private adminRepository: IAdminRepository) {}

  async execute(id: string): Promise<void> {
    const admin = await this.adminRepository.findById(id);

    if (!admin) {
      throw new AppError('Admin not found.', 404);
    }

    await this.adminRepository.delete(id);
  }
}

export default DeleteAdminUseCase;
