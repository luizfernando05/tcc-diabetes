import ListPatientUseCase from '@application/Patient/use-case/ListPatientUseCase';
import PatientRepository from '@infra/database/repositories/PatientRepository';
import { NextFunction, Request, Response } from 'express';

export class ListPatientController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const patientRepository = new PatientRepository();
      const listPatientUseCase = new ListPatientUseCase(patientRepository);

      const patients = await listPatientUseCase.execute();

      return res.status(200).json(patients);
    } catch (err) {
      next(err);
    }
  }
}

export default ListPatientController;
