import { useAuth } from '@features/auth';
import { Logo, SignOut } from '@shared/icons';
import { IconButton } from '@shared/ui';
import st from './styles.module.scss';
import { TopNavigation } from './ui/ui';

export const MobileNav = () => {
  const { logOut } = useAuth();

  return (
    <div className={st.navigation}>
      <Logo />
      <TopNavigation />
      <IconButton onClick={logOut}>
        <SignOut />
      </IconButton>
    </div>
  );
};
