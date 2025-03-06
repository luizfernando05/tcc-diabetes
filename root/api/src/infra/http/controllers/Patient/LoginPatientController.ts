import LoginPatientUseCase from '@application/Patient/use-case/LoginPatientUseCase';
import PatientRepository from '@infra/database/repositories/PatientRepository';
import { AppError } from '@presentation/errors/AppError';
import { LoginPatientValidator } from '@presentation/validator/Patient/LoginPatientValidator';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class LoginPatientController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      await LoginPatientValidator.validate(req.body, { abortEarly: false });

      const { email, password } = req.body;

      const patientRepository = new PatientRepository();
      const loginpatientUseCase = new LoginPatientUseCase(patientRepository);

      const token = await loginpatientUseCase.execute({ email, password });

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

export default LoginPatientController;
