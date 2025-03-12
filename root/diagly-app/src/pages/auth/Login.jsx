import LogoIcon from '../../assets/logoIcon.svg?react';
import InputField from '../../components/Forms/InputField';

const Login = () => {
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
        <form action="">
          <InputField
            label="Email"
            type="text"
            name="username"
            placeholder="Enter your email..."
          />
          <InputField label="Password" type="password" name="password" />

          <div className="flex justify-between items-center text-sm mb-4">
            <div className="flex">
              <input className="mr-1" type="checkbox" />
              <p>Remeber me</p>
            </div>
            <a className="text-gray-11 hover:underline" href="#">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="font-poppins text-base font-medium w-full bg-yellow-09 text-yellow-12 py-2 rounded-lg hover:bg-yellow-08 transition cursor-pointer"
          >
            Sing in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
