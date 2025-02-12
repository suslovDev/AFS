import { selectChatIds } from '@entities/messages/models';
import { useSelector } from 'react-redux';
import { ChangeOpponent } from '@features/chat/change-opponent';
import { ChatPreview } from './chat-preview';
import st from './styles.module.scss';

export const ChatList = (): JSX.Element => {
  const chatIds = useSelector((state: RootState) => selectChatIds(state));

  return (
    <div className={st.list}>
      <div className={st.header}>
        <h2 className={st.title}>Чаты</h2>
        <span className={st.actions}>
          <ChangeOpponent />
        </span>
      </div>

      <ul>
        {chatIds.map((chatId) => (
          <li key={chatId}>
            <ChatPreview id={chatId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
