import { usePhone } from '@app/providers/PhoneProvider';
import { Chat } from '@widgets/chat';
import { StartNewChat } from '@features/start-new-chat';

export const ChatPage = (): JSX.Element => {
  const { phoneNumber } = usePhone();

  return <>{!phoneNumber ? <StartNewChat /> : <Chat />}</>;
};
