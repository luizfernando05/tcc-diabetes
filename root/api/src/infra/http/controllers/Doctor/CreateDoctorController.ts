import CreateDoctorUseCase from '@application/Doctor/use-case/CreateDoctorUseCase';
import AdminRepository from '@infra/database/repositories/AdminRepository';
import DoctorRepository from '@infra/database/repositories/DoctorRepository';
import { AppError } from '@presentation/errors/AppError';
import { CreateDoctorValidator } from '@presentation/validator/Doctor/CreateDoctorValidate';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class CreateDoctorController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      await CreateDoctorValidator.validate(req.body, { abortEarly: false });

      const { name, email, password, createdByAdminId } = req.body;

      const doctorRepository = new DoctorRepository();
      const adminRepository = new AdminRepository();
      const createDoctorUseCase = new CreateDoctorUseCase(
        doctorRepository,
        adminRepository
      );

      const doctor = await createDoctorUseCase.execute({
        name,
        email,
        password,
        createdByAdminId,
      });

      return res.status(200).json(doctor);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessage = err.errors.join(', ');
        return next(new AppError(errorMessage, 400));
      }

      next(err);
    }
  }
}

export default CreateDoctorController;
