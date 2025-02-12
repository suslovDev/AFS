import { Navigate, Route, Routes } from 'react-router-dom';
import { StartNewChat } from '@features/start-new-chat';
import { AuthPage, ChatPage } from '../../pages';
import { useAuth } from './auth';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={<StartNewChat />} />} />
      <Route path="chat/:id" element={<PrivateRoute element={<ChatPage />} />} />
      <Route path="/login" element={<AuthPage />} />
    </Routes>
  );
};
