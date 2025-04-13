import cn from 'classnames';
import React from 'react';
import st from './styles.module.scss';

type Props = {
  children?: React.ReactNode | React.ReactNodeArray;
  style?: React.CSSProperties;
  className?: string;
};

export const Container: React.FC<Props> = ({ children, style, className }) => {
  return (
    <div className={cn(st.container, className)} style={style}>
      {children}
    </div>
  );
};
