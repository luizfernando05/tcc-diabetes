import LoginAdminUseCase from '@application/Admin/use-cases/LoginAdminUseCase';
import AdminRepository from '@infra/database/repositories/AdminRepository';
import { AppError } from '@presentation/errors/AppError';
import { LoginAdminValidator } from '@presentation/validator/Admin/LoginAdminValidator';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class LoginAdminController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      await LoginAdminValidator.validate(req.body, { abortEarly: false });

      const { email, password } = req.body;

      const adminRepository = new AdminRepository();
      const loginAdminUseCase = new LoginAdminUseCase(adminRepository);

      const token = await loginAdminUseCase.execute({ email, password });

      return res.status(200).json({ token });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessage = err.errors.join(', ');
        return next(new AppError(errorMessage, 400));
      }

      next(err);
    }
  }
}
