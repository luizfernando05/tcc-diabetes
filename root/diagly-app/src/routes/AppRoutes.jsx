import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/patient/login" />} />
        <Route path="/:userType/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
