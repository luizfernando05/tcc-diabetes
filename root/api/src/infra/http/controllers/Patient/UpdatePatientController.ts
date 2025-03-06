import UpdatePatientUseCase from '@application/Patient/use-case/UpdatePatientUseCase';
import PatientRepository from '@infra/database/repositories/PatientRepository';
import { AppError } from '@presentation/errors/AppError';
import { UpdatePatientValidator } from '@presentation/validator/Patient/UpdatePatientValidator';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class UpdatePatientController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      await UpdatePatientValidator.validate(req.body, { abortEarly: false });

      const { id } = req.params;
      const { name, email, password, birthDate, gender } = req.body;

      if (!id || !yup.string().uuid().isValidSync(id)) {
        throw new AppError('Invalid ID.', 400);
      }

      const patientRepository = new PatientRepository();
      const updatePatientUseCase = new UpdatePatientUseCase(patientRepository);

      const updatedPatient = await updatePatientUseCase.execute({
        id,
        name,
        email,
        password,
        birthDate,
        gender,
      });

      return res.status(200).json(updatedPatient);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessage = err.errors.join(', ');
        return next(new AppError(errorMessage, 400));
      }

      next(err);
    }
  }
}
