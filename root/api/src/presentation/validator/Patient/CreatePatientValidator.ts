import * as yup from 'yup';

export const CreatePatientValidator = yup.object().shape({
  name: yup.string().required('Name is required.'),
  email: yup
    .string()
    .email('Invalid email format.')
    .required('Email is required.'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long.')
    .required('Password is required.'),
  passwordConfirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password')], 'Password must match.'),
  birthDate: yup.date().required('Birth date is required.'),
  gender: yup
    .mixed<'Masculino' | 'Feminino'>()
    .oneOf(['Masculino', 'Feminino'], 'Invalid gender.')
    .required('Gender is required.'),
});
