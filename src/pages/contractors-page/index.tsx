import { Link } from 'react-router-dom';
import { Container } from '@shared/ui';
import st from './styles.module.scss';

export const ContractorsPage = () => {
  return (
    <Container className={st.page}>
      <h1>This page is empty.</h1>
      <Link to="/">На главную</Link>
    </Container>
  );
};
