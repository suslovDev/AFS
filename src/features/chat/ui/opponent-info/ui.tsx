import { useAvatar } from '@shared/hooks/use-avatar';
import { Person } from '@shared/icons';
import { formatPhoneNumber, parseIdToPhone } from '@shared/utils';
import st from './styles.module.scss';

interface Props {
  chatId: string;
}

export const OpponentInfo = ({ chatId }: Props): JSX.Element => {
  const { avatarUrl } = useAvatar(chatId);

  const opponentPhone = parseIdToPhone(chatId);
  const formatedPhone = formatPhoneNumber(opponentPhone, 'display');

  return (
    <div className={st.info}>
      <div className={st.avatar}>
        {avatarUrl ? <img src={avatarUrl} alt="avatar" /> : <Person />}
      </div>

      <span className={st.phone}>{formatedPhone}</span>
    </div>
  );
};
