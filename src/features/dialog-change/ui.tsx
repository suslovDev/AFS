import { CommonModal, TextButton, TextInput } from '@shared/ui';
import st from './styles.module.scss';

interface Props {
  isOpen: boolean;
  value: string;
  onSave: () => void;
  onCancel: () => void;
  onChange: (value: string) => void;
}

export const DialogChange = ({ isOpen = false, value, onSave, onCancel, onChange }: Props) => {
  return (
    <CommonModal isOpen={isOpen}>
      <div className={st.modal}>
        <h3 className={st.heading}>Specify the Organization's name</h3>

        <TextInput value={value} onChange={(e) => onChange(e.target.value)} />

        <div className={st.actions}>
          <TextButton onClick={onCancel} variant="outlined">
            Cancel
          </TextButton>
          <TextButton onClick={onSave}>Save changes</TextButton>
        </div>
      </div>
    </CommonModal>
  );
};
