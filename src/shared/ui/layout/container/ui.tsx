import cn from 'classnames';
import { ReactElement } from 'react';
import st from './styles.module.scss';

type Props = {
  children?: ReactElement;
  className?: string;
};

export const Container = ({ children, className }: Props): JSX.Element => {
  return <div className={cn(st.container, className)}>{children}</div>;
};
