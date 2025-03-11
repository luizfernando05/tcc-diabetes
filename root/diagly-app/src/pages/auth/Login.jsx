import { useState } from 'react';
import { login } from '../../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (role) => {
    setError('');
    try {
      await login(role, email, password);
      alert('Login successful!');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-poppins font-bold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 border p-2 rounded"
      />
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => handleLogin('admins')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Admin
        </button>
        <button
          onClick={() => handleLogin('doctors')}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Médico
        </button>
        <button
          onClick={() => handleLogin('patients')}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Paciente
        </button>
      </div>
    </div>
  );
};

export default Login;
