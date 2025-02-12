import { AuthProvider } from './providers/auth';
import { Router } from './providers/router';
import { Store } from './providers/store';
import './styles/index.scss';

export const App = (): JSX.Element => {
  return (
    <Store>
      <AuthProvider>
        <div className="App">
          <Router />
        </div>
      </AuthProvider>
    </Store>
  );
};
