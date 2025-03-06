import { DeletePatientUseCase } from '@application/Patient/use-case/DeletePatientUseCase';
import PatientRepository from '@infra/database/repositories/PatientRepository';
import { AppError } from '@presentation/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class DeletePatientController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;

      if (!id || !yup.string().uuid().isValidSync(id)) {
        throw new AppError('Invalid ID.', 400);
      }

      const patientRepository = new PatientRepository();
      const deletePatientUseCase = new DeletePatientUseCase(patientRepository);

      await deletePatientUseCase.execute(id);

      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

export default DeletePatientController;
