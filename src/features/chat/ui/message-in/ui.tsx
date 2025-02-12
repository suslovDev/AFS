import { TailIn } from '@shared/icons';
import st from './styles.module.scss';

interface Props {
  text: string;
}

export const MessageIn = ({ text }: Props): JSX.Element => {
  if (!text) return <></>;

  return (
    <div className={st.message}>
      <span className={st.tail}>
        <TailIn />
      </span>

      <div className={st.text}>{text}</div>
    </div>
  );
};
