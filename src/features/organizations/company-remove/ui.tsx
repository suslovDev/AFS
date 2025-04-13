import { DialogRemove } from '@features/remove-organization';
import { Trash } from '@shared/icons';
import { ClicableIcon } from '@shared/ui/buttons';
import { useRemoveCompany } from './model';
import st from './styles.module.scss';

interface Props {
  companyId: string;
}

export const DeleteCompany = ({ companyId }: Props) => {
  const { closeDeleteDialog, confirmDelete, isDeleteDialogOpen, openDeleteDialog } =
    useRemoveCompany(companyId);
  return (
    <>
      <ClicableIcon className={st.icon} onClick={openDeleteDialog}>
        <Trash />
      </ClicableIcon>

      <DialogRemove
        isOpen={isDeleteDialogOpen}
        onRemove={confirmDelete}
        onCancel={closeDeleteDialog}
      />
    </>
  );
};
