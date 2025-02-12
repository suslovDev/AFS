import { MessageComposer, OpponentInfo } from '../../features/chat';
import { Messagelist } from '../../features/chat/ui';
import st from './styles.module.scss';

interface Props {
  id: string;
}

export const Chat = ({ id }: Props): JSX.Element => {
  return (
    <div className={st.chat}>
      <div className={st.opponent}>
        <OpponentInfo chatId={id} />
      </div>

      <section className={st.messages}>{id && <Messagelist chatId={id} />}</section>
      <MessageComposer chatId={id} />
    </div>
  );
};
