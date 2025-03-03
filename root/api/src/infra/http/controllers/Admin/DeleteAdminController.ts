import DeleteAdminUseCase from '@application/Admin/use-cases/DeleteAdminUseCase';
import AdminRepository from '@infra/database/repositories/AdminRepository';
import { NextFunction, Request, Response } from 'express';

export class DeleteAdminController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;

      const adminRepository = new AdminRepository();
      const deleteAdminUseCase = new DeleteAdminUseCase(adminRepository);

      await deleteAdminUseCase.execute(id);

      return res.status(200).send();
    } catch (err) {
      next(err);
    }
  }
}

export default DeleteAdminController;
