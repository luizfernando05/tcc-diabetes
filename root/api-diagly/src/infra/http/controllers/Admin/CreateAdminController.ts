import CreateAdminUseCase from '@application/Admin/use-cases/CreateAdminUseCase';
import AdminRepository from '@infra/database/repositories/AdminRepository';
import { AppError } from '@presentation/errors/AppError';
import { CreateAdminValidator } from '@presentation/validator/Admin/CreateAdminValidator';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class CreateAdminController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      await CreateAdminValidator.validate(req.body, { abortEarly: false });

      const { name, email, password } = req.body;

      const adminRepository = new AdminRepository();
      const createAdminUseCase = new CreateAdminUseCase(adminRepository);

      const admin = await createAdminUseCase.execute({ name, email, password });

      return res.status(201).json(admin);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessage = err.errors.join(', ');
        return next(new AppError(errorMessage, 400));
      }

      next(err);
    }
  }
}

export default CreateAdminController;
