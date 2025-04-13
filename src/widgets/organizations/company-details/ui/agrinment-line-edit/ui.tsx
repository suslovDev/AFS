import cn from 'classnames';
import { format, parseISO } from 'date-fns';
import { TextInput } from '@shared/ui';
import st from './styles.module.scss';

interface Props {
  number: string;
  date: string;
  setDate: (date: string) => void;
  setNumber: (number: string) => void;
}

export const AgrinmentLineEdit = ({ number, date, setDate, setNumber }: Props) => {
  const formattedDate = format(parseISO(date), 'yyyy-MM-dd');
  return (
    <li className={st.line}>
      <div className={st.line__pair}>
        <span className={cn(st.line__pair__title, st['line__pair__title--wide'])}>
          Agreement number:
        </span>
        <TextInput
          className={st.line__pair__input}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className={st.line__pair}>
        <span className={st.line__pair__title}>Date:</span>
        <TextInput
          type="date"
          className={st.line__pair__input}
          value={formattedDate}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </li>
  );
};
