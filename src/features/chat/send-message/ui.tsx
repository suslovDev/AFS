import { Send } from '@shared/icons';
import { IconButton } from '@shared/ui';
import { useSendMessage } from './lib';

interface Props {
  message: {
    text: string;
    type: 'outgoing' | 'incoming';
  };
  onSuccessSend: () => void;
}

export const SendMessage = ({ message, onSuccessSend }: Props): JSX.Element => {
  const { sendMessage } = useSendMessage(onSuccessSend);

  return (
    <IconButton onClick={() => sendMessage(message.text)}>
      <Send />
    </IconButton>
  );
};
