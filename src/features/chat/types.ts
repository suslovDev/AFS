export interface IMessage {
  idMessage: string;
  text: string;
  type: 'outgoing' | 'incoming';
}
