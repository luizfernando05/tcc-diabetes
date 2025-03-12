import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const authService = {
  async login(userType, credentials) {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/${userType}/login`,
        credentials
      );
      return response.data.token;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed.');
    }
  },
};

export default authService;
