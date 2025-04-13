import { ReactElement } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { Account, Company, Contractor } from '@shared/icons';
import { LabeledButton } from '@shared/ui';
import st from './styles.module.scss';

interface Props {
  title: string;
  path: string;
  Icon: ReactElement;
}

type TVariant = 'outlined' | 'filled';

const MenuItem = ({ title, path, Icon }: Props) => {
  const navigate = useNavigate();
  const isMatch = useMatch(path);
  const btnVariant: TVariant = isMatch ? 'filled' : 'outlined';

  return (
    <LabeledButton variant={btnVariant} startIcon={Icon} fullWidth onClick={() => navigate(path)}>
      {title}
    </LabeledButton>
  );
};

export const AsideNavigation = () => {
  return (
    <div className={st.navigation}>
      <MenuItem path="organizations" title="Organizations" Icon={<Company />} />
      <MenuItem path="contractors" title="Contractors" Icon={<Contractor />} />
      <MenuItem path="clients" title="Clients" Icon={<Account />} />
    </div>
  );
};
