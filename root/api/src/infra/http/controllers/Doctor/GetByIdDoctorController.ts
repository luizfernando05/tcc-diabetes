import GetByDoctorIdUseCase from '@application/Doctor/use-case/GetByIdDoctorUseCase';
import DoctorRepository from '@infra/database/repositories/DoctorRepository';
import { AppError } from '@presentation/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class GetByDoctorIdController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;

      if (req.user.role !== 'doctor' || req.user.id !== id) {
        throw new AppError('You are not allowed to view this doctor.', 403);
      }

      if (!id || !yup.string().uuid().isValidSync(id)) {
        throw new AppError('Invalid ID.', 400);
      }

      const doctorRepository = new DoctorRepository();
      const getDoctorByIdUseCase = new GetByDoctorIdUseCase(doctorRepository);

      const doctor = await getDoctorByIdUseCase.execute(id);

      return res.status(200).json(doctor);
    } catch (err) {
      next(err);
    }
  }
}

export default GetByDoctorIdController;
