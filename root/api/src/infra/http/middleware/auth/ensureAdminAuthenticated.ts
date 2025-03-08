import { ITokenPayload } from '@application/interfaces/ITokenPayload';
import { AppError } from '@presentation/errors/AppError';
import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import AdminRepository from '@infra/database/repositories/AdminRepository';

export const ensureAdminAuthenticated = async (
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

    const adminRepository = new AdminRepository();
    const admin = await adminRepository.findById(decoded.id);

    if (!admin) {
      return next(new AppError('User does not have admin privilages.', 403));
    }

    req.user = {
      id: decoded.id,
      role: 'admin',
    };

    return next();
  } catch (err) {
    return next(new AppError('Invalid JWT token.', 401));
  }
};
