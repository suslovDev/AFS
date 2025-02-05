import { useAuth } from '@app/providers/AuthProvider';
import { usePhone } from '@app/providers/PhoneProvider';
import { getAllMessages } from '@entities/chat/api';
import { useCallback, useEffect, useState } from 'react';
import { IMessage } from '@features/chat';

export const useChat = () => {
  const { idInstance, apiTokenInstance } = useAuth();
  const { phoneNumber } = usePhone();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const memoizedGetAllMessages = useCallback(async () => {
    setIsLoading(true);

    try {
      const responseData = await getAllMessages(idInstance!, apiTokenInstance!);

      if (!responseData?.body?.messageData?.textMessageData?.textMessage) {
        return;
      }

      setMessages((prev) => {
        const idMessage = responseData.body?.idMessage;
        const text = responseData.body?.messageData?.textMessageData?.textMessage;

        if (idMessage && text) {
          const messageExists = prev.some((msg) => msg.idMessage === idMessage);

          if (!messageExists) {
            return [
              ...prev,
              {
                idMessage,
                text: text,
                type: 'incoming',
              },
            ];
          } else {
            console.warn('Сообщение с idMessage уже существует, не добавляем', responseData);
            return prev;
          }
        } else {
          console.warn(
            'Не удалось создать сообщение: отсутствуют необходимые данные',
            responseData
          );
          return prev;
        }
      });
    } catch (e) {
      console.error('Ошибка при выполнении getAllMessages:', e);
    } finally {
      setIsLoading(false);
    }
  }, [apiTokenInstance, phoneNumber, idInstance]);

  useEffect(() => {
    memoizedGetAllMessages();
    const timerId = setInterval(memoizedGetAllMessages, 5000);

    return () => {
      clearInterval(timerId);
    };
  }, [memoizedGetAllMessages]);

  const addNewMessage = useCallback((msg: IMessage): void => {
    setMessages((prev) => {
      return [...prev, msg];
    });
  }, []);

  return {
    messages,
    addNewMessage,
    isLoading,
  };
};
