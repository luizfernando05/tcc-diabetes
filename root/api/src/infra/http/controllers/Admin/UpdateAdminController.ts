import UpdateAdminUseCase from '@application/Admin/use-cases/UpdateAdminUseCase';
import AdminRepository from '@infra/database/repositories/AdminRepository';
import { AppError } from '@presentation/errors/AppError';
import { UpdateAdminValidator } from '@presentation/validator/Admin/UpdateAdminValidator';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class UpdateAdminController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      await UpdateAdminValidator.validate(req.body, { abortEarly: false });

      const { id } = req.params;
      const { name, email, password } = req.body;

      const adminRepository = new AdminRepository();
      const updateAdminUseCase = new UpdateAdminUseCase(adminRepository);

      const updateAdmin = await updateAdminUseCase.execute({
        id,
        name,
        email,
        password,
      });

      return res.status(200).json(updateAdmin);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessage = err.errors.join(', ');
        return next(new AppError(errorMessage, 400));
      }

      next(err);
    }
  }
}
