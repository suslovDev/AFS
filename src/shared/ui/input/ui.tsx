import { InputHTMLAttributes } from 'react';
import st from './styles.module.scss';

export const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  return <input className={st.input} {...props} />;
};
