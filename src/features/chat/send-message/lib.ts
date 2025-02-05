import { useAuth } from '@app/providers/AuthProvider';
import { usePhone } from '@app/providers/PhoneProvider';

export const useSendMessage = (onSendSuccess: () => void) => {
  const { idInstance, apiTokenInstance } = useAuth();
  const { phoneNumber } = usePhone();

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
      onSendSuccess();
    } catch (e) {
      console.error(e);
    }
  };

  return { sendMessage, opponentPhone: phoneNumber };
};
