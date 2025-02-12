export const receiveNotification = async (idInstance: string, apiTokenInstance: string) => {
  try {
    const response = await fetch(
      `https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}?receiveTimeout=5`
    );

    if (!response.ok) {
      console.error('Ошибка при получении уведомлений:', response.status, response.statusText);
      return null;
    }

    const responseData = await response.json();

    if (responseData === null) {
      return null;
    }

    return responseData;
  } catch (error) {
    console.error('Ошибка при выполнении receiveNotification:', error);
    return null;
  }
};

export const deleteNotification = async (
  idInstance: string,
  apiTokenInstance: string,
  receiptId: number
) => {
  try {
    const response = await fetch(
      `https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
      { method: 'DELETE' }
    );

    if (!response.ok) {
      console.error('Ошибка при удалении уведомления:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Ошибка при удалении уведомления:', error);
  }
};
