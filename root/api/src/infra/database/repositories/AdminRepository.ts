import Admin from '@domain/entities/Admin';
import { IAdminRepository } from '@domain/repositories/IAdminRepository';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';

export class AdminRepository implements IAdminRepository {
  private ormRepository: Repository<Admin>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Admin);
  }

  async create(admin: Admin): Promise<Admin> {
    const createAdmin = this.ormRepository.create(admin);
    return this.ormRepository.save(createAdmin);
  }

  async findByEmail(email: string): Promise<Admin | null> {
    return this.ormRepository.findOne({ where: { email } });
  }

  async update(admin: Admin): Promise<Admin> {
    return this.ormRepository.save(admin);
  }
}

export default AdminRepository;
