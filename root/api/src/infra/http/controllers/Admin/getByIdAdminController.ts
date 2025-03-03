import GetAdminByIdUseCase from '@application/Admin/use-cases/GetByIdAdminUseCase';
import AdminRepository from '@infra/database/repositories/AdminRepository';
import { AppError } from '@presentation/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class GetAdminByIdController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;

      if (!id || !yup.string().uuid().isValidSync(id)) {
        throw new AppError('Invalid ID.', 400);
      }

      const adminRepository = new AdminRepository();
      const getAdminByIdUseCase = new GetAdminByIdUseCase(adminRepository);

      const admin = await getAdminByIdUseCase.execute(id);

      return res.status(200).json(admin);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessage = err.errors.join(', ');
        return next(new AppError(errorMessage, 400));
      }

      next(err);
    }
  }
}

export default GetAdminByIdController;
