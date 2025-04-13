import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '@shared/config/api';
import { AUTH_URL } from '../api';

export const useSignUp = (value: string) => {
  const [hasError, setHasError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleAuth = async () => {
    await signUp(value);
    navigate('/organizations', { replace: true });
  };

  const signUp = async (username: string) => {
    try {
      const response = await api.get(AUTH_URL, {
        params: {
          user: username,
        },
      });

      const token = response.headers.authorization.split(' ')[1];
      localStorage.setItem('token', token);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error;
        console.error('Auth error:', axiosError.response?.data || axiosError.message);
        setHasError(axiosError.message);
      } else {
        console.error('Auth error:', error);
        setHasError('An unexpected error');
      }
      throw error;
    }
  };

  return {
    hasError,
    handleAuth,
  };
};
