import { useNavigate } from 'react-router-dom';
import { NewChat } from '@shared/icons';
import { IconButton } from '@shared/ui';

export const ChangeOpponent = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate('/')}>
      <NewChat />
    </IconButton>
  );
};
