import { ReactElement } from 'react';
import { Container } from '@shared/ui/layout';
import st from './styles.module.scss';

interface Props {
  children?: ReactElement;
}

export const ChatContainer = ({ children }: Props): JSX.Element => {
  return <Container className={st.chat}>{children}</Container>;
};
