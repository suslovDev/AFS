export interface IMessage {
  idMessage: string;
  text: string;
  type: 'outgoing' | 'incoming';
  chatId: string;
}

interface IncomingMessage {
  receiptId: number;
  body: {
    typeWebhook: 'incomingMessageReceived';
    instanceData: {
      idInstance: number;
    };
    idMessage: string;
    senderData: {
      chatId: string;
    };
    messageData: {
      textMessageData: {
        textMessage: string;
      };
    };
  };
}

export type IncomingMessageBody = IncomingMessage['body'];

interface OutgoingMessage {
  receiptId: number;
  body: {
    typeWebhook: 'outgoingAPIMessageReceived';
    instanceData: {
      idInstance: number;
    };
    idMessage: string;
    senderData: {
      chatId: string;
    };
    messageData: {
      extendedTextMessageData: {
        text: string;
      };
    };
  };
}
export type OutgoingMessageBody = OutgoingMessage['body'];

export type ExternalMessage = IncomingMessage | OutgoingMessage;
