import { Outlet } from 'react-router-dom';
import { MainMenu } from '@widgets/main-menu';
import { Sidebar } from '@widgets/sidebar';
import st from './styles.module.scss';

export const Layout = () => {
  return (
    <div className={st.layout}>
      <aside className={st.aside}>
        <MainMenu />
        <Sidebar />
      </aside>
      <section className={st.scrollable}>
        <Outlet />
      </section>
    </div>
  );
};
