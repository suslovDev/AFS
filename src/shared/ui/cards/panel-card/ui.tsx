import { ReactElement } from 'react';
import st from './styles.module.scss';

interface Props {
  children?: ReactElement;
}

export const PanelCard = ({ children }: Props): JSX.Element => {
  return <div className={st.card}>{children}</div>;
};
