import axios from 'axios';

const API_URL = 'http://localhost:3000';

const login = async (role, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/${role}/login`, {
      email,
      password,
    });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Login failed';
  }
};

const logout = () => {
  localStorage.removeItem('token');
};

const getToken = () => {
  return localStorage.getItem('token');
};

export { login, logout, getToken };
