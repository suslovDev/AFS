import { useWindowWidth } from '@shared/hooks';
import { Check, Cross } from '@shared/icons';
import { LabeledButton } from '@shared/ui';

interface Props {
  onCansel?: () => void;
}

export const EditorAction = ({ onCansel }: Props) => {
  const width = useWindowWidth();
  const isMobile = width < 450;

  return (
    <>
      <LabeledButton type="submit" size="small" variant="outlined" startIcon={<Check />}>
        {`${!isMobile ? 'Save changes' : 'Save'}`}
      </LabeledButton>
      {onCansel && (
        <LabeledButton size="small" variant="outlined" startIcon={<Cross />} onClick={onCansel}>
          Cancel
        </LabeledButton>
      )}
    </>
  );
};
