import { useAuth } from '@app/providers/auth';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const useSendMessage = (onSendSuccess?: () => void) => {
  const { idInstance, apiTokenInstance } = useAuth();

  const phoneNumber = useSelector((state: RootState) => state.opponent.phone);

  const [idMessage, setIdMesage] = useState('');

  const sendMessage = async (message: string) => {
    if (!idInstance || !apiTokenInstance || !phoneNumber) {
      console.error('Необходимо ввести учетные данные и телефон собеседника!');
      return;
    }

    try {
      const response = await fetch(
        `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chatId: phoneNumber + '@c.us',
            message: message,
          }),
        }
      );
      if (!response.ok) throw response;
      const { idMessage } = await response.json();
      setIdMesage(idMessage);
      onSendSuccess && onSendSuccess();
    } catch (e) {
      console.error(e);
    }
  };

  return { sendMessage, idMessage, opponentPhone: phoneNumber };
};
