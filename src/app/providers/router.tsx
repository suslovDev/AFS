import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthPage } from '@pages/auth-page';
import { ClientsPage } from '@pages/clients-page';
import { ContractorsPage } from '@pages/contractors-page';
import { HomePage } from '@pages/home-page';
import { Layout } from '@pages/layout';
import { OrganizationsPage } from '@pages/organizations-page';
import { useAuth } from '@features/auth';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/auth" replace />;
  }

  return element;
};

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="organizations" element={<PrivateRoute element={<OrganizationsPage />} />} />
        <Route path="contractors" element={<ContractorsPage />} />
        <Route path="clients" element={<PrivateRoute element={<ClientsPage />} />} />
      </Route>
      <Route path="auth" element={<AuthPage />} />
    </Routes>
  );
};
