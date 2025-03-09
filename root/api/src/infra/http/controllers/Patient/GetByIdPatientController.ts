import GetByIdPatientUseCase from '@application/Patient/use-case/GetByIdPatientUseCase';
import PatientRepository from '@infra/database/repositories/PatientRepository';
import { AppError } from '@presentation/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class GetByIdPatientController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;

      if (req.user.role !== 'patient' || req.user.id !== id) {
        throw new AppError('You are not allowed to delete this patient.', 403);
      }

      if (!id || !yup.string().uuid().isValidSync(id)) {
        throw new AppError('Invalid ID.', 400);
      }

      const patientRepository = new PatientRepository();
      const getByIdPatientUseCase = new GetByIdPatientUseCase(
        patientRepository
      );

      const patient = await getByIdPatientUseCase.execute(id);

      return res.status(200).json(patient);
    } catch (err) {
      next(err);
    }
  }
}

export default GetByIdPatientController;
