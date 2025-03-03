import Admin from '@domain/entities/Admin';
import { IAdminRepository } from '@domain/repositories/IAdminRepository';

export class ListAdminUseCase {
  constructor(private adminRepository: IAdminRepository) {}

  async execute(): Promise<Admin[]> {
    return this.adminRepository.findAll();
  }
}

export default ListAdminUseCase;
