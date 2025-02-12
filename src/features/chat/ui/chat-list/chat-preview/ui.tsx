import { selectLastMessageByChatId } from '@entities/messages/models';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Link, useMatch } from 'react-router-dom';
import { useAvatar } from '@shared/hooks/use-avatar';
import { Person } from '@shared/icons';
import { formatPhoneNumber, parseIdToPhone } from '@shared/utils';
import st from './styles.module.scss';

interface Props {
  id: string;
}

export const ChatPreview = ({ id }: Props): JSX.Element => {
  const { avatarUrl } = useAvatar(id);
  const currentMessage = useSelector((state: RootState) => selectLastMessageByChatId(state, id));

  const phone = parseIdToPhone(id);
  const formatedPhone = formatPhoneNumber(phone, 'display');

  const isChatActive = !!useMatch(`/chat/${id}`);

  return (
    <Link to={`/chat/${id}`}>
      <div className={cn(st.preview, isChatActive && st.preview_active)}>
        <div className={st.person}>
          {avatarUrl ? <img src={avatarUrl} alt="avatar" /> : <Person />}
        </div>

        <div className={st.chat}>
          <div className={st.info}>
            <p className={st.number}>{formatedPhone}</p>
            <p className={st.message}>{currentMessage?.text || ''}</p>
          </div>
          <div className={st.time}>Сегодня</div>
        </div>
      </div>
    </Link>
  );
};
