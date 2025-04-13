import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../models';

export const useAuthRedirect = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/organizations', { replace: true });
  }, []);
};
