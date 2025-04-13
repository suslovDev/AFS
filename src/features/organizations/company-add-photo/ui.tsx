import { AddPhoto as Camera } from '@shared/icons';
import { LabeledButton } from '@shared/ui';
import { useAddPhotoCompany } from './model';

interface Props {
  companyId: string;
}

export const AddPhoto = ({ companyId }: Props) => {
  const { handleAddImage, inputRef, onInputChange } = useAddPhotoCompany(companyId);
  return (
    <>
      <LabeledButton
        size="small"
        variant="outlined"
        startIcon={<Camera />}
        onClick={handleAddImage}
      >
        Add
      </LabeledButton>
      <input
        accept="image/*"
        type="file"
        onChange={onInputChange}
        ref={inputRef}
        style={{ display: 'none' }}
      />
    </>
  );
};
