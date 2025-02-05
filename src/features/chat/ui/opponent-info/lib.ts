import { useAuth } from '@app/providers/AuthProvider';
import { useEffect, useState } from 'react';

export const useOpponent = (phone: string | null) => {
  const { idInstance, apiTokenInstance } = useAuth();

  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const getAvatar = async () => {
      try {
        const response = await fetch(
          `https://api.green-api.com/waInstance${idInstance}/getAvatar/${apiTokenInstance}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chatId: phone + '@c.us',
            }),
          }
        );
        const result = await response.json();
        setAvatarUrl(result.urlAvatar);
      } catch (error) {
        console.error('Ошибка получения аватара!', error);
      }
    };

    getAvatar();
  }, [phone]);

  return { avatarUrl };
};
