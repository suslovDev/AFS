import { DialogChange } from '@features/dialog-change';
import { Edit } from '@shared/icons';
import { ClicableIcon } from '@shared/ui/buttons';
import { useChangeNameCompany } from './model';

interface Props {
  companyId: string;
  companyName: string;
}

export const ChangeNameCopmany = ({ companyId, companyName }: Props) => {
  const { closeChangeDialog, confirmChange, isChangeDialogOpen, openChangeDialog, name, setName } =
    useChangeNameCompany(companyId, companyName);

  return (
    <>
      <ClicableIcon onClick={openChangeDialog}>
        <Edit />
      </ClicableIcon>

      <DialogChange
        value={name}
        onChange={setName}
        onSave={confirmChange}
        isOpen={isChangeDialogOpen}
        onCancel={closeChangeDialog}
      />
    </>
  );
};
