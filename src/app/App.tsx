import { Router } from './providers/router';
import './styles/index.scss';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <Router />
    </div>
  );
};
