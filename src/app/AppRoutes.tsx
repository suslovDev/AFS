import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthPage, ChatPage } from '../pages';
import { useAuth } from './providers/AuthProvider';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={<ChatPage />} />} />
      <Route path="/login" element={<AuthPage />} />
    </Routes>
  );
};
