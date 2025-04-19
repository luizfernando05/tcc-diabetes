import { ITokenPayload } from '@application/interfaces/ITokenPayload';
import PatientRepository from '@infra/database/repositories/PatientRepository';
import { AppError } from '@presentation/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export const ensurePatientAutheticated = async (
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

    const patientRepository = new PatientRepository();
    const patient = await patientRepository.findById(decoded.id);

    if (!patient) {
      return next(new AppError('User does not have patient privilages.', 403));
    }

    req.user = {
      id: decoded.id,
      role: 'patient',
    };

    return next();
  } catch {
    return next(new AppError('Invalid JWT token.', 401));
  }
};
