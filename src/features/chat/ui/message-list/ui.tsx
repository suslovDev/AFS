import { selectMessagesByChatId } from '@entities/messages/models';
import { useSelector } from 'react-redux';
import { MessageIn } from '../message-in';
import { MessageOut } from '../message-out';
import st from './styles.module.scss';

interface Props {
  chatId: string;
}

export const Messagelist = ({ chatId }: Props): JSX.Element => {
  const messages = useSelector((state: RootState) => selectMessagesByChatId(state, chatId));

  return (
    <ul className={st.list}>
      {messages?.map(({ text, type, idMessage }) =>
        type === 'incoming' ? (
          <MessageIn text={text} key={idMessage} />
        ) : (
          <MessageOut text={text} key={idMessage} />
        )
      )}
    </ul>
  );
};
