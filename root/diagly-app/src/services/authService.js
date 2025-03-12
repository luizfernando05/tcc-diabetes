const API_BASE_URL = 'http://localhost:3000';

const authService = {
  login: async (userType, credentials) => {
    const pluralUserType =
      userType === 'admin'
        ? 'admins'
        : userType === 'doctor'
        ? 'doctors'
        : 'patients';

    const response = await fetch(`${API_BASE_URL}/${pluralUserType}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to login');
    }

    return data.token;
  },
};

export default authService;
