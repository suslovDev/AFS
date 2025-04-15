import { Outlet } from 'react-router-dom';
import { MainMenu } from '@widgets/main-menu';
import { MobileNav } from '@widgets/mobile-nav';
import { Sidebar } from '@widgets/sidebar';
import { useWindowWidth } from '@shared/hooks';
import st from './styles.module.scss';

export const Layout = () => {
  const width = useWindowWidth();
  const isShowSidebar = width > 1100;
  const isShowMobileNav = !isShowSidebar;

  return (
    <div className={st.layout}>
      {isShowSidebar && (
        <aside className={st.aside}>
          <MainMenu />
          <Sidebar />
        </aside>
      )}

      {isShowMobileNav && <MobileNav />}
      <section className={st.scrollable}>
        <Outlet />
      </section>
    </div>
  );
};
