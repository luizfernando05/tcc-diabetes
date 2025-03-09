import { ITokenPayload } from '@application/interfaces/ITokenPayload';
import DoctorRepository from '@infra/database/repositories/DoctorRepository';
import { AppError } from '@presentation/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export const ensureDoctorAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next(new AppError('JWT token is missing.', 401));
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(
      token,
      process.env.JWT_SECRET || 'default'
    ) as ITokenPayload;

    const doctorRepository = new DoctorRepository();
    const doctor = await doctorRepository.findById(decoded.id);

    if (!doctor) {
      return next(new AppError('User does not have doctor privilages.', 403));
    }

    req.user = {
      id: decoded.id,
      role: 'doctor',
    };

    return next();
  } catch {
    return next(new AppError('Invalid JWT token.', 401));
  }
};
