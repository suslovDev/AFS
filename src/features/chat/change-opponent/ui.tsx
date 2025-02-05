import { usePhone } from '@app/providers/PhoneProvider';
import { NewChat } from '@shared/icons';
import { IconButton } from '@shared/ui';

export const ChangeOpponent = (): JSX.Element => {
  const { setPhoneNumber } = usePhone();

  return (
    <IconButton onClick={() => setPhoneNumber(null)} size="large" variant="light">
      <NewChat />
    </IconButton>
  );
};
