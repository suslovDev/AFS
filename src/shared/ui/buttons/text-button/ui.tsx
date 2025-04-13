import cn from 'classnames';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import st from './styles.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
  size?: 'medium' | 'small';
  className?: string;
  children?: React.ReactNode;
}

export const TextButton = forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'filled', size = 'medium', children, className, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(st.btn, st[variant], st[size], className)} {...props}>
        {children}
      </button>
    );
  }
);
