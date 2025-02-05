import { useChat } from '@features/chat/lib';
import { ChangeOpponent, ChatContainer, MessageComposer, OpponentInfo } from '../../features/chat';
import { Messagelist } from '../../features/chat/ui';
import st from './styles.module.scss';

export const Chat = (): JSX.Element => {
  const { messages, addNewMessage } = useChat();

  return (
    <ChatContainer>
      <div className={st.chat}>
        <div className={st.change}>
          <ChangeOpponent />
        </div>
        <header className={st.opponent}>
          <OpponentInfo />
        </header>

        <section className={st.messages}>
          <Messagelist messages={messages} />
        </section>

        <footer className={st.composer}>
          <MessageComposer onAddMessage={addNewMessage} />
        </footer>
      </div>
    </ChatContainer>
  );
};
