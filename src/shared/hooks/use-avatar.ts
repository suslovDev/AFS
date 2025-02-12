import { useAuth } from '@app/providers/auth';
import { useEffect, useState } from 'react';

export const useAvatar = (chatId: string | null) => {
  const { idInstance, apiTokenInstance } = useAuth();

  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

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
              chatId,
            }),
          }
        );
        const result = await response.json();
        setAvatarUrl(result.urlAvatar);
      } catch (error) {
        console.error('Ошибка получения аватара!', error);
        setAvatarUrl(null);
      }
    };

    getAvatar();
  }, [chatId]);

  return { avatarUrl };
};
