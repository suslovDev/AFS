import { organizationStore } from '@entities/organization';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import api from '@shared/config/api';
import { COMPANY_API } from '../api';

export const useRemoveCompany = (id: string) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const openDeleteDialog = () => {
    setIsDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  const confirmDelete = async () => {
    try {
      await api.delete(`${COMPANY_API}/${id}`);

      organizationStore.removeOrganization(id);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error;
        console.error('Error removing company:', axiosError.response?.data || axiosError.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  return {
    isDeleteDialogOpen,
    openDeleteDialog,
    closeDeleteDialog,
    confirmDelete,
  };
};
