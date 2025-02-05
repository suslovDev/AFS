import { usePhone } from '@app/providers/PhoneProvider';
import React, { useState } from 'react';
import { Container, Input } from '@shared/ui';
import { formatPhoneNumber } from '@shared/utils';
import st from './styles.module.scss';

export const StartNewChat = (): JSX.Element => {
  const { setPhoneNumber } = usePhone();
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneNumber(phone);
    localStorage.setItem('opponentPhone', phone);
  };

  return (
    <Container className={st.container}>
      <form onSubmit={handleSubmit} className={st.form}>
        <div className={st.field}>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(formatPhoneNumber(e.target.value, 'api'))}
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
