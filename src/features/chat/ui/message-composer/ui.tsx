import { useCallback, useState } from 'react';
import { Attach } from '@features/chat/attach';
import { RecordVoice } from '@features/chat/record-voice';
import { SendMessage } from '@features/chat/send-message';
import { useSendMessage } from '@features/chat/send-message/lib';
import { IMessage } from '@features/chat/types';
import { ChatContainer } from '../chat-container';
import { MessageInput } from '../message-input';
import st from './styles.module.scss';

interface Props {
  onAddMessage: (message: IMessage) => void;
}

export const MessageComposer = ({ onAddMessage }: Props): JSX.Element => {
  const [textValue, setTextValue] = useState('');

  const handleInputMessage = useCallback((value: string) => {
    setTextValue(value);
  }, []);

  const isInputEmpty = !textValue.trim().length;

  const composeMessage = {
    idMessage: String(new Date()), //Это плохо, надо прицепить idMessage
    text: textValue,
    type: 'outgoing',
  } as const;

  const handleSuccessSend = useCallback(() => {
    onAddMessage(composeMessage);
    setTextValue('');
  }, [composeMessage, onAddMessage]);

  const { sendMessage } = useSendMessage(handleSuccessSend);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && !isInputEmpty) {
        event.preventDefault();
        sendMessage(textValue);
      }
    },
    [sendMessage, textValue, isInputEmpty]
  );

  return (
    <ChatContainer>
      <div className={st.composer} onKeyDown={handleKeyDown}>
        <Attach />

        <MessageInput onChange={handleInputMessage} value={textValue} />
        {isInputEmpty ? (
          <RecordVoice />
        ) : (
          <SendMessage message={composeMessage} onSuccessSend={handleSuccessSend} />
        )}
      </div>
    </ChatContainer>
  );
};
