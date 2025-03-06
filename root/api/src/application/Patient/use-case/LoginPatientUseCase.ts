import { AppError } from '@presentation/errors/AppError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { LoginPatientDTO } from '../dto/LoginPatientDTO';
import { IPatientRepository } from '@domain/repositories/IPatientRepository';

export class LoginPatientUseCase {
  constructor(private patientRepository: IPatientRepository) {}

  async execute({ email, password }: LoginPatientDTO): Promise<string> {
    const patient = await this.patientRepository.findByEmail(email);

    if (!patient) {
      throw new AppError('Invalid credentials', 401);
    }

    const passwordCheck = await compare(password, patient.password);

    if (!passwordCheck) {
      throw new AppError('Invalid credentials', 401);
    }

    if (!process.env.JWT_SECRET) {
      throw new AppError('JWT secret is not defined.', 500);
    }

    const token = sign({ id: patient.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    return token;
  }
}

export default LoginPatientUseCase;
