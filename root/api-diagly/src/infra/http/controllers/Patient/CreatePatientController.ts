import CreatePatientUseCase from '@application/Patient/use-case/CreatePatientUseCase';
import DoctorRepository from '@infra/database/repositories/DoctorRepository';
import PatientRepository from '@infra/database/repositories/PatientRepository';
import { AppError } from '@presentation/errors/AppError';
import { CreatePatientValidator } from '@presentation/validator/Patient/CreatePatientValidator';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class CreatePatientController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      await CreatePatientValidator.validate(req.body, { abortEarly: false });

      const { name, email, password, birthDate, gender, createdByDoctorId } =
        req.body;

      const patientRepository = new PatientRepository();
      const doctorRepository = new DoctorRepository();
      const createPatientUseCase = new CreatePatientUseCase(
        patientRepository,
        doctorRepository
      );

      const patient = await createPatientUseCase.execute({
        name,
        email,
        password,
        birthDate,
        gender,
        createdByDoctorId,
      });

      return res.status(201).json(patient);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessage = err.errors.join(', ');
        return next(new AppError(errorMessage, 400));
      }

      next(err);
    }
  }
}

export default CreatePatientController;
