import { AppRoutes } from './AppRoutes';
import { AuthProvider } from './providers/AuthProvider';
import { PhoneProvider } from './providers/PhoneProvider';
import './styles/index.scss';

export const App = (): JSX.Element => {
  return (
    <>
      <AuthProvider>
        <PhoneProvider>
          <div className="App">
            <AppRoutes />
          </div>
        </PhoneProvider>
      </AuthProvider>
    </>
  );
};
