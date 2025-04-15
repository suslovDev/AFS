import { Link } from 'react-router-dom';
import { Container } from '@shared/ui';
import st from './styles.module.scss';

export const ClientsPage = () => {
  return (
    <Container className={st.page}>
      <h1>This page is empty too.</h1>
      <Link to="/">На главную</Link>
    </Container>
  );
};
