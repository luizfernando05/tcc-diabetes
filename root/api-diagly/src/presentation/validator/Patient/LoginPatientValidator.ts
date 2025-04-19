import * as yup from 'yup';

export const LoginPatientValidator = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format.')
    .required('Email is required.'),
  password: yup.string().required('Password is required.'),
});
