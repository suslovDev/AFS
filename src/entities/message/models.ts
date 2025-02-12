interface TextMessageData {
  textMessage: string;
}

interface MessageData {
  textMessageData: TextMessageData;
  typeMessage: 'textMessage';
}

interface SenderData {
  chatId: string;
  chatName: string;
  sender: string;
  senderContactName: string;
  senderName: string;
}

export interface ExternalMessage {
  idMessage: string;
  messageData: MessageData;
  senderData: SenderData;
  timestamp: number;
  typeWebhook: 'outgoingMessageReceived' | 'incomingMessageReceived';
}
