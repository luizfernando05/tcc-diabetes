import Admin from '@domain/entities/Admin';

export interface IAdminRepository {
  create(admin: Admin): Promise<Admin>;
}
