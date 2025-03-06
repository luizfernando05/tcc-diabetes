import DeleteDoctorUseCase from '@application/Doctor/use-case/DeleteDoctorUseCase';
import DoctorRepository from '@infra/database/repositories/DoctorRepository';
import { AppError } from '@presentation/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class DeleteDoctorController {
  async hanlde(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;

      if (!id || !yup.string().uuid().isValidSync(id)) {
        throw new AppError('Invalid ID.', 400);
      }

      const doctorRepository = new DoctorRepository();
      const deleteDoctorUseCase = new DeleteDoctorUseCase(doctorRepository);

      await deleteDoctorUseCase.execute(id);

      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

export default DeleteDoctorController;
