export interface TextMessageData {
  textMessage: string;
}

export interface MessageData {
  textMessageData?: TextMessageData;
}

export interface Body {
  messageData?: MessageData;
  idMessage?: string;
}

export interface ApiResponse {
  body?: Body;
  result?: boolean;
  receiptId?: number;
}
