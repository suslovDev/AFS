import { setPhone } from '@entities/opponent/models';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Input } from '@shared/ui';
import { formatPhoneNumber } from '@shared/utils';
import st from './styles.module.scss';

export const StartNewChat = (): JSX.Element => {
  const [opponentPhone, setOpponentPhone] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const formattedPhone = formatPhoneNumber(opponentPhone, 'api');

      dispatch(setPhone(formattedPhone));

      navigate(`/chat/${formattedPhone}@c.us`);
    },
    [opponentPhone, dispatch, navigate]
  );

  return (
    <Container className={st.container}>
      <form onSubmit={handleSubmit} className={st.form}>
        <div className={st.field}>
          <Input
            type="tel"
            value={opponentPhone}
            onChange={(e) => setOpponentPhone(e.target.value)}
            placeholder="Телефон собеседника"
          />
        </div>
        <button type="submit" className={st.action}>
          Начать чат
        </button>
      </form>
    </Container>
  );
};
