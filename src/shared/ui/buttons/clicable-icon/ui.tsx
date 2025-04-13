import cn from 'classnames';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import st from './styles.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'medium';
  className?: string;
  children?: React.ReactNode;
}

export const ClicableIcon = forwardRef<HTMLButtonElement, Props>(
  ({ size = 'medium', children, className, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(st.btn, st[size], className)} {...props}>
        {children}
      </button>
    );
  }
);
