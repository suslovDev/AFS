import cn from 'classnames';
import { ReactElement } from 'react';
import { Container } from '@shared/ui/layout';
import st from './styles.module.scss';

interface Props {
  children?: ReactElement;
  className?: string;
}

export const ChatContainer = ({ children, className }: Props): JSX.Element => {
  return <Container className={cn(st.chat, className)}>{children}</Container>;
};
