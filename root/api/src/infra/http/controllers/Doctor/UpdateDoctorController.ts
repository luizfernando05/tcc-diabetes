import UpdateDoctorUseCase from '@application/Doctor/use-case/UpdateDoctorUseCase';
import DoctorRepository from '@infra/database/repositories/DoctorRepository';
import { AppError } from '@presentation/errors/AppError';
import { UpdateDoctorValidator } from '@presentation/validator/Doctor/UpdateDoctorValidator';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export class UpdateDoctorController {
  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      await UpdateDoctorValidator.validate(req.body, { abortEarly: false });

      const { id } = req.params;
      const { name, email, password } = req.body;

      const doctorRepository = new DoctorRepository();
      const updateDoctorUseCase = new UpdateDoctorUseCase(doctorRepository);

      if (!id || !yup.string().uuid().isValidSync(id)) {
        throw new AppError('Invalid ID.', 400);
      }

      const updatedDoctor = await updateDoctorUseCase.execute({
        id,
        name,
        email,
        password,
      });

      return res.status(200).json(updatedDoctor);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessage = err.errors.join(', ');
        return next(new AppError(errorMessage, 400));
      }

      next(err);
    }
  }
}

export default UpdateDoctorController;
