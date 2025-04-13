import cn from 'classnames';
import React from 'react';
import st from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  startIcon?: JSX.Element;
  variant?: 'filled' | 'outlined';
  size?: 'medium' | 'small';
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const LabeledButton: React.FC<Props> = ({
  startIcon,
  variant = 'filled',
  size = 'medium',
  fullWidth = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(st.btn, st[variant], st[size], fullWidth && st.fullWidth, className)}
      {...props}
    >
      {startIcon && <div className={st.icon}>{startIcon}</div>}
      {children && <div className={st.children}>{children}</div>}
    </button>
  );
};
