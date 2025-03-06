import ListDoctorUseCase from '@application/Doctor/use-case/ListDoctorUseCase';
import DoctorRepository from '@infra/database/repositories/DoctorRepository';
import { NextFunction, Request, Response } from 'express';

export class ListDoctorController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const doctorRepository = new DoctorRepository();
      const lisDoctorUseCase = new ListDoctorUseCase(doctorRepository);

      const doctors = await lisDoctorUseCase.execute();

      return res.status(200).json(doctors);
    } catch (err) {
      next(err);
    }
  }
}

export default ListDoctorController;
