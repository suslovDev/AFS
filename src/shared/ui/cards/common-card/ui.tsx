import cn from 'classnames';
import React, { ReactNode } from 'react';
import st from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const Card: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={cn(st.card, className)} {...props}>
      {children}
    </div>
  );
};
