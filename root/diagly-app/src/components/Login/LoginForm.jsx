import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LogoIcon from '../../assets/logoIcon.svg?react';
import InputField from '../Forms/InputField';
import authService from '../../services/authService';

const LoginForm = () => {
  const { userType } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const token = await authService.login(userType, formData);
      localStorage.setItem('token', token);
      navigate(`/${userType}/dashboard`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-02">
      <div className="bg-gray-01 p-8 rounded-lg shadow-lg w-96">
        <div className="login-header flex justify-center mb-5">
          <LogoIcon />
        </div>
        <h1 className="font-poppins text-gray-12 text-2xl font-semibold text-center mb-2">
          Welcome back!
        </h1>
        <p className="font-roboto text-gray-11 text-sm text-center mb-8">
          Please enter your details to sing in.
        </p>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="text"
            name="email"
            placeholder="Enter your email..."
            value={formData.email}
            onChange={handleChange}
            required
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="flex justify-between items-center text-sm mb-4">
            <div className="flex">
              <input className="mr-1" type="checkbox" />
              <p className="font-roboto text-sm text-gray-11">Remeber me</p>
            </div>
            <a
              className="font-roboto text-sm text-gray-11 hover:underline"
              href="#"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="font-poppins text-base font-medium w-full bg-yellow-09 text-yellow-12 py-2 rounded-lg hover:bg-yellow-08 transition cursor-pointer mb-2"
          >
            Sing in
          </button>
        </form>

        {error && (
          <p className="font-roboto text-red-500 text-xs text-center">
            {error}
          </p>
        )}

        <p className="font-roboto text-center text-sm mt-4 text-gray-11">
          {userType === 'patient' ? 'Not a patient?' : 'Are you a patient?'}{' '}
          <a
            href={userType === 'patient' ? '/doctor/login' : '/patient/login'}
            className="text-yellow-600 hover:underline"
          >
            Log in as {userType === 'patient' ? 'doctor' : 'patient'}.
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
