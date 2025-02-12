import { useCallback, useState } from 'react';
import { Attach } from '@features/chat/attach';
import { RecordVoice } from '@features/chat/record-voice';
import { SendMessage } from '@features/chat/send-message';
import { useSendMessage } from '@features/chat/send-message/lib';
import { MessageInput } from '../ui/message-input';
import st from './styles.module.scss';

export const MessageComposer = (): JSX.Element => {
  const [textValue, setTextValue] = useState('');

  const handleInputMessage = useCallback((value: string) => {
    setTextValue(value);
  }, []);

  const isInputEmpty = !textValue.trim().length;

  const handleSuccessSend = useCallback(() => {
    setTextValue('');
  }, []);

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
    <div className={st.composer} onKeyDown={handleKeyDown}>
      <Attach />

      <MessageInput onChange={handleInputMessage} value={textValue} />
      {isInputEmpty ? (
        <RecordVoice />
      ) : (
        <SendMessage onSendMessage={() => sendMessage(textValue)} />
      )}
    </div>
  );
};
