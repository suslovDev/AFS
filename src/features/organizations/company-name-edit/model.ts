import { useEffect, useState } from 'react';
import { updateOrganization } from '../company-details-edit/model';

export const useChangeNameCompany = (companyId: string, companyName: string) => {
  const [isChangeDialogOpen, setIsChangeDialogOpen] = useState(false);

  const [name, setName] = useState('');

  const openChangeDialog = () => {
    setIsChangeDialogOpen(true);
  };

  const closeChangeDialog = () => {
    setIsChangeDialogOpen(false);
  };

  const confirmChange = () => {
    updateOrganization(companyId, { name: name });
    setIsChangeDialogOpen(false);
  };

  useEffect(() => {
    setName(companyName);
  }, [companyName]);

  return {
    isChangeDialogOpen,
    openChangeDialog,
    closeChangeDialog,
    confirmChange,
    name,
    setName,
  };
};
