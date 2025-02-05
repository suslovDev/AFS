import { usePhone } from '@app/providers/PhoneProvider';
import { formatPhoneNumber } from '@shared/utils';
import { ChatContainer } from '../chat-container';
import { useOpponent } from './lib';
import st from './styles.module.scss';

export const OpponentInfo = (): JSX.Element => {
  const { phoneNumber } = usePhone();
  const { avatarUrl } = useOpponent(phoneNumber);
  const formatedPhone = formatPhoneNumber(phoneNumber || '');

  return (
    <ChatContainer>
      <div className={st.info}>
        <div className={st.avatar}>
          <img src={avatarUrl} />
        </div>

        <span className={st.phone}>{formatedPhone}</span>
      </div>
    </ChatContainer>
  );
};
