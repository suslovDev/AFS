import { useAuth } from '@app/providers/auth';
import { deleteNotification, receiveNotification } from '@entities/chat/api';
import { addMessage } from '@entities/messages/models';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ExternalMessage } from './types';

export const normalizeMessage = (incomingData: ExternalMessage) => {
  const {
    body: { typeWebhook, idMessage, senderData, messageData },
  } = incomingData;

  const isOutgoing = typeWebhook.includes('outgoing');

  return {
    type: isOutgoing ? 'outgoing' : 'incoming',
    text: isOutgoing
      ? (messageData as any)?.extendedTextMessageData?.text
      : (messageData as any)?.textMessageData?.textMessage,
    idMessage: idMessage,
    chatId: senderData.chatId,
  };
};

export const useIncomingMessage = () => {
  const { idInstance, apiTokenInstance } = useAuth();

  const dispatch = useDispatch();

  const handleIncomingMessage = useCallback(async () => {
    try {
      const responseData = await receiveNotification(idInstance!, apiTokenInstance!);
      if (!responseData) return;

      dispatch(addMessage(normalizeMessage(responseData)));

      deleteNotification(idInstance!, apiTokenInstance!, responseData!.receiptId!);
    } catch (e) {
      console.error('Ошибка получения входящего уведомления:', e);
    }
  }, [apiTokenInstance, idInstance]);

  useEffect(() => {
    handleIncomingMessage();
    const timerId = setInterval(handleIncomingMessage, 5000);

    return () => {
      clearInterval(timerId);
    };
  }, [handleIncomingMessage]);
};
