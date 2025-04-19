import LoginDoctorUseCase from '@application/Doctor/use-case/LoginDoctorUseCase';
import DoctorRepository from '@infra/database/repositories/DoctorRepository';
import { AppError } from '@presentation/errors/AppError';
import { LoginDoctorValidator } from '@presentation/validator/Doctor/LoginDoctorValidator';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class LoginDoctorController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      await LoginDoctorValidator.validate(req.body, { abortEarly: false });

      const { email, password } = req.body;

      const doctorRepository = new DoctorRepository();
      const loginDoctorUseCase = new LoginDoctorUseCase(doctorRepository);

      const token = await loginDoctorUseCase.execute({ email, password });

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

export default LoginDoctorController;
