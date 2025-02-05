import { AddExpression } from '@features/chat/add-expression';
import st from './styles.module.scss';
import { MesageInputField } from './ui/message-input-field';

interface Props {
  onChange: (value: string) => void;
  value: string;
}

export const MessageInput = ({ onChange, value }: Props): JSX.Element => {
  return (
    <div className={st.wrap}>
      <AddExpression />
      <MesageInputField onChange={onChange} value={value} />
    </div>
  );
};
