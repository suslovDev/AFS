import cn from 'classnames';
import { ButtonHTMLAttributes, ReactElement } from 'react';
import st from './styles.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dark' | 'light';
  size?: 'medium' | 'large';
  children: ReactElement;
  className?: string;
}

export const IconButton = ({
  variant = 'dark',
  size = 'medium',
  children,
  className,
  ...props
}: Props): JSX.Element => {
  return (
    <button className={cn(className, st.btn, st[variant], st[size])} {...props}>
      {children}
    </button>
  );
};
