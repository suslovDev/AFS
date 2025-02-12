import { useParams } from 'react-router-dom';
import { Chat } from '@widgets/chat';
import { ChatContainer, ChatList } from '@features/chat';
import { useIncomingMessage } from '@features/chat/lib';
import st from './styles.module.scss';

export const ChatPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  const chatId = id || '';

  useIncomingMessage();

  return (
    <ChatContainer className={st.container}>
      <>
        <ChatList />
        <Chat id={chatId} />
      </>
    </ChatContainer>
  );
};
