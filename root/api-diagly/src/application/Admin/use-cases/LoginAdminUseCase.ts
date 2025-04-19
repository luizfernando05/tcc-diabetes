import { LoginAdminDTO } from '../dtos/LoginAdminDTO';
import { AppError } from '@presentation/errors/AppError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { IAdminRepository } from '@domain/repositories/IAdminRepository';

export class LoginAdminUseCase {
  constructor(private adminRepository: IAdminRepository) {}

  async execute({ email, password }: LoginAdminDTO): Promise<string> {
    const admin = await this.adminRepository.findByEmail(email);

    if (!admin) {
      throw new AppError('Invalid credentials.', 401);
    }

    const passwordCheck = await compare(password, admin.password);

    if (!passwordCheck) {
      throw new AppError('Wrong password.', 401);
    }

    if (!process.env.JWT_SECRET) {
      throw new AppError('JWT secret is not defined.', 500);
    }

    const token = sign({ id: admin.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    console.log(token);

    return token;
  }
}

export default LoginAdminUseCase;
