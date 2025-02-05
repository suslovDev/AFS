import { IMessage } from '../../types';
import { MessageIn } from '../message-in';
import { MessageOut } from '../message-out';
import st from './styles.module.scss';

interface Props {
  messages: IMessage[];
}

export const Messagelist = ({ messages }: Props): JSX.Element => {
  return (
    <ul className={st.list}>
      {messages.map(({ text, type, idMessage }) =>
        type === 'incoming' ? (
          <MessageIn text={text} key={idMessage} />
        ) : (
          <MessageOut text={text} key={idMessage} />
        )
      )}
    </ul>
  );
};
