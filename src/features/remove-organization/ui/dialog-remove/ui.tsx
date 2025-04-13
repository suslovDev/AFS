import { CommonModal, TextButton } from '@shared/ui';
import st from './styles.module.scss';

interface Props {
  isOpen: boolean;
  onRemove: () => void;
  onCancel: () => void;
}

export const DialogRemove = ({ isOpen = false, onRemove, onCancel }: Props) => {
  return (
    <CommonModal isOpen={isOpen} onRequestClose={onCancel}>
      <div className={st.modal}>
        <h3 className={st.heading}>Remove the Organization?</h3>
        <div className={st.content}>Are you sure you want to remove this Organozation?</div>
        <div className={st.actions}>
          <TextButton onClick={onCancel} variant="outlined">
            No
          </TextButton>
          <TextButton onClick={onRemove}>Yes, remove</TextButton>
        </div>
      </div>
    </CommonModal>
  );
};
