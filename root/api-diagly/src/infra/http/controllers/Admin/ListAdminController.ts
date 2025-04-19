import ListAdminUseCase from '@application/Admin/use-cases/ListAdminUseCase';
import AdminRepository from '@infra/database/repositories/AdminRepository';
import { NextFunction, Request, Response } from 'express';

export class ListAdminController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const adminRepository = new AdminRepository();
      const listAdminUseCase = new ListAdminUseCase(adminRepository);

      const admins = await listAdminUseCase.execute();

      return res.status(200).json(admins);
    } catch (err) {
      next(err);
    }
  }
}

export default ListAdminController;
