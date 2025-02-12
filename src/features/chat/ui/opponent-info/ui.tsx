import { useAvatar } from '@shared/hooks/use-avatar';
import { useOpponentPhone } from '@shared/hooks/use-opponent-phone';
import { Person } from '@shared/icons';
import { formatPhoneNumber } from '@shared/utils';
import st from './styles.module.scss';

interface Props {
  chatId: string;
}

export const OpponentInfo = ({ chatId }: Props): JSX.Element => {
  const { avatarUrl } = useAvatar(chatId);
  const { opponentPhone } = useOpponentPhone();

  const formatedPhone = formatPhoneNumber(opponentPhone);

  return (
    <div className={st.info}>
      <div className={st.avatar}>
        {avatarUrl ? <img src={avatarUrl} alt="avatar" /> : <Person />}
      </div>

      <span className={st.phone}>{formatedPhone}</span>
    </div>
  );
};
