import { useAuth } from '@app/providers/AuthProvider';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Input } from '@shared/ui';
import st from './styles.module.scss';

export const LoginForm = (): JSX.Element => {
  const { setIdInstance, setApiTokenInstance, isAuth, setIsAuth } = useAuth();
  const [id, setId] = useState('');
  const [token, setToken] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIdInstance(id);
    setApiTokenInstance(token);
    setIsAuth(true);
    localStorage.setItem('idInstance', id);
    localStorage.setItem('apiTokenInstance', token);
    navigate('/');
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true });
    }
  }, [isAuth, navigate]);

  return (
    <Container className={st.container}>
      <form onSubmit={handleSubmit} className={st.form}>
        <div className={st.field}>
          <Input
            type="text"
            id="idInstance"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="ID Instance"
          />
        </div>
        <div className={st.field}>
          <Input
            type="text"
            id="apiTokenInstance"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="API Token Instance"
          />
        </div>
        <div className={st.action}>
          <button type="submit">Сохранить и продолжить</button>
        </div>
      </form>
    </Container>
  );
};
