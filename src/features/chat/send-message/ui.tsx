import { Send } from '@shared/icons';
import { IconButton } from '@shared/ui';

interface Props {
  onSendMessage: () => void;
}

export const SendMessage = ({ onSendMessage }: Props): JSX.Element => {
  return (
    <IconButton onClick={onSendMessage}>
      <Send />
    </IconButton>
  );
};
