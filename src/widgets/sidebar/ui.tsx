import st from './styles.module.scss';
import { AsideNavigation } from './ui/aside-navigation';

export const Sidebar = () => {
  return (
    <div className={st.sidebar}>
      <div className={st.sidebar__header}>
        <p className={st.title}>Oak Tree Cemetery</p>
        <p className={st.subtitle}>Process Manager</p>
      </div>
      <AsideNavigation />
      <p className={st.sidebar__copyright}>All Funeral Serv ices © 2015-2025</p>
    </div>
  );
};
