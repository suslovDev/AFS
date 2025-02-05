import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface PhoneContextType {
  phoneNumber: string | null;
  setPhoneNumber: (phoneNumber: string | null) => void;
}

const PhoneContext = createContext<PhoneContextType | undefined>(undefined);

interface PhoneProviderProps {
  children: ReactNode;
}

export const PhoneProvider = ({ children }: PhoneProviderProps): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);

  useEffect(() => {
    const storedOpponentPhone = localStorage.getItem('opponentPhone');

    if (storedOpponentPhone) {
      setPhoneNumber(storedOpponentPhone);
    }
  }, []);

  useEffect(() => {
    if (phoneNumber) {
      localStorage.setItem('opponentPhone', phoneNumber);
    } else {
      localStorage.removeItem('opponentPhone');
    }
  }, [phoneNumber]);

  const value: PhoneContextType = {
    phoneNumber,
    setPhoneNumber,
  };

  return <PhoneContext.Provider value={value}>{children}</PhoneContext.Provider>;
};

export const usePhone = () => {
  const context = useContext(PhoneContext);
  if (!context) {
    throw new Error('usePhone must be used within a PhoneProvider');
  }
  return context;
};
