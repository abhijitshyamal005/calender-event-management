import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/Dashboard';
import RegisterForm from './components/RegisterForm';
import useAuth from './hooks/useAuth';

const App = () => {
  const { user } = useAuth(); // Use custom hook to manage authentication state

  return (
    <Routes>
      <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterForm />} /> {/* New register route */}
      <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/login" />} />
      {/* Add other routes as needed */}
    </Routes>
  );
};

export default App;
