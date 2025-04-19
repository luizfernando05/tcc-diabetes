import Admin from '@domain/entities/Admin';

export interface IAdminRepository {
  create(admin: Admin): Promise<Admin>;
  findByEmail(email: string): Promise<Admin | null>;
  findById(id: string): Promise<Admin | null>;
  findAll(): Promise<Admin[]>;
  update(admin: Admin): Promise<Admin>;
  delete(id: string): Promise<void>;
}
