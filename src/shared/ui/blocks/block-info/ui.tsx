import cn from 'classnames';
import { ReactNode } from 'react';
import st from './styles.module.scss';

interface Props {
  title: string;
  Action: ReactNode;
  className?: string;
  childrenClassName?: string;
  children?: ReactNode;
}

export const BlockInfo = ({ title, Action, className, childrenClassName, children }: Props) => {
  return (
    <div className={cn(st.block, className)}>
      <div className={st.header}>
        <h3 className={st.title}>{title}</h3>
        {Action}
      </div>
      <ul className={cn(st.list, childrenClassName)}>{children}</ul>
    </div>
  );
};
