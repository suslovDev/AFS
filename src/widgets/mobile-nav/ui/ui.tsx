import cn from 'classnames';
import { Link, useMatch } from 'react-router-dom';
import st from './styles.module.scss';

interface Props {
  title: string;
  path: string;
}

const NavItem = ({ title, path }: Props) => {
  const isActive = useMatch(path);

  return (
    <Link to={path} className={cn(isActive && st.active)}>
      {title}
    </Link>
  );
};

export const TopNavigation = () => {
  return (
    <ul className={st.links}>
      <NavItem path="organizations" title="Organizations" />
      <NavItem path="contractors" title="Contractors" />
      <NavItem path="clients" title="Clients" />
    </ul>
  );
};
