import st from './styles.module.scss';

interface Props {
  number: string;
  date: string;
}

export const AgreementLineView = ({ number, date }: Props) => {
  return (
    <div>
      {number} <span className={st.separator}>/</span> {date}
    </div>
  );
};
