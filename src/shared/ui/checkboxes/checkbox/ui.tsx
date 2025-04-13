import { Check } from '@shared/icons';
import st from './styles.module.scss';

interface Props {
  isChecked: boolean;
  onChange: (v: boolean) => void;
}

export const Checkbox = ({ isChecked, onChange }: Props) => {
  const handleCheckboxChange = () => {
    onChange(!isChecked);
  };

  return (
    <label className={st.wrap} onClick={handleCheckboxChange}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          e.stopPropagation();
          handleCheckboxChange();
        }}
        className={st.hidden}
      />
      <div className={st.mark}>{isChecked && <Check />}</div>
    </label>
  );
};
