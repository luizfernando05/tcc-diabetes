import * as yup from 'yup';

export const CreateDoctorValidator = yup.object().shape({
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
  createdByAdminId: yup
    .string()
    .matches(
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
      'Invalid UUID'
    )
    .required('Admin ID is required.'),
});
