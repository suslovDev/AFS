import { ReactElement } from 'react';
import st from './style.module.scss';

interface Props {
  title?: string;
  content?: string | ReactElement;
}

export const LineInfo = ({ title, content }: Props) => {
  return (
    <li className={st.line}>
      <span className={st.line__title}>{`${title}:`}</span>
      <div className={st.line__content}>{content}</div>
    </li>
  );
};
