import { TailOut } from '@shared/icons';
import st from './styles.module.scss';

interface Props {
  text: string;
}

export const MessageOut = ({ text }: Props): JSX.Element => {
  return (
    <div className={st.message}>
      <span className={st.tail}>
        <TailOut />
      </span>

      <div className={st.text}>{text}</div>
    </div>
  );
};
