import { ApiResponse } from './models';

export const getAllMessages = async (
  idInstance: string,
  apiTokenInstance: string
): Promise<ApiResponse | null> => {
  try {
    const response = await fetch(
      `https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}?receiveTimeout=5`
    );

    if (!response.ok) {
      console.error('Ошибка при получении уведомлений:', response.status, response.statusText);
      return null;
    }

    const responseData: ApiResponse | null = await response.json();

    if (responseData === null) {
      return null;
    }

    if (responseData.receiptId) {
      try {
        fetch(
          `https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${responseData.receiptId}`,
          { method: 'DELETE' }
        );
      } catch (error) {
        console.error('Ошибка при удалении уведомления:', error);
      }
    }

    return responseData;
  } catch (error) {
    console.error('Ошибка при выполнении getAllMessages:', error);
    return null;
  }
};
