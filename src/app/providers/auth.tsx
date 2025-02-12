import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  idInstance: string | null;
  apiTokenInstance: string | null;
  isAuth: boolean;
  setIdInstance: (idInstance: string | null) => void;
  setApiTokenInstance: (apiTokenInstance: string | null) => void;
  setIsAuth: (isAuth: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [idInstance, setIdInstance] = useState<string | null>(null);
  const [apiTokenInstance, setApiTokenInstance] = useState<string | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const storedIdInstance = localStorage.getItem('idInstance');
    const storedApiTokenInstance = localStorage.getItem('apiTokenInstance');

    if (storedIdInstance && storedApiTokenInstance) {
      setIdInstance(storedIdInstance);
      setApiTokenInstance(storedApiTokenInstance);
      setIsAuth(true);
    }
  }, []);

  useEffect(() => {
    if (idInstance) {
      localStorage.setItem('idInstance', idInstance);
    } else {
      localStorage.removeItem('idInstance');
    }

    if (apiTokenInstance) {
      localStorage.setItem('apiTokenInstance', apiTokenInstance);
    } else {
      localStorage.removeItem('apiTokenInstance');
    }
  }, [idInstance, apiTokenInstance]);

  const value: AuthContextType = {
    idInstance,
    apiTokenInstance,
    isAuth,
    setIdInstance,
    setApiTokenInstance,
    setIsAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth не может использоваться без AuthProvider');
  }
  return context;
};
