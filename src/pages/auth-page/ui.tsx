import { AuthForm } from '@features/auth';
import { Container } from '@shared/ui';
import st from './styles.module.scss';

export const AuthPage = () => {
  return (
    <Container className={st.container}>
      <AuthForm />
    </Container>
  );
};
