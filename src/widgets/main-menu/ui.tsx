import { useAuth } from '@features/auth';
import { Company, Logo, Search, Separator, Settings, SignOut } from '@shared/icons';
import { IconButton } from '@shared/ui';
import st from './styles.module.scss';

export const MainMenu = () => {
  const { logOut } = useAuth();

  return (
    <div className={st.menu}>
      <ul className={st.modules}>
        <li>
          <Logo />
        </li>
        <li>
          <IconButton>
            <Company />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <Search />
          </IconButton>
        </li>
      </ul>

      <Separator />
      <ul className={st.menu__items}>
        <li>
          <IconButton>
            <Settings />
          </IconButton>
        </li>
        <li>
          <IconButton onClick={logOut}>
            <SignOut />
          </IconButton>
        </li>
      </ul>
    </div>
  );
};
