import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token') || null;
  const isAuth = token ? true : false;
  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/auth');
  };

  return { isAuth, token, logOut };
};
