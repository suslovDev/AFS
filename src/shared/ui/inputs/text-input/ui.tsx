import cn from 'classnames';
import React, { forwardRef } from 'react';
import st from './styles.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  disabled?: boolean | undefined;
}

export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ isError, disabled, className, ...props }, ref) => {
    return (
      <div className={cn(st.wrapper, className)}>
        <input
          disabled={disabled && disabled}
          ref={ref}
          className={cn(st.input, isError && st.input__error)}
          {...props}
        />
      </div>
    );
  }
);
