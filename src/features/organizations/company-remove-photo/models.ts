import { organizationStore } from '@entities/organization';
import axios, { AxiosError } from 'axios';
import api from '@shared/config/api';
import { getCompanyImageUrl } from '../api';

export const removePhoto = async (photoName: string, companyId: string) => {
  const photoUrl = getCompanyImageUrl(companyId, photoName);
  try {
    await api.delete(photoUrl);

    organizationStore.removePhoto(photoName);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      console.error(
        'Error removing company photo:',
        axiosError.response?.data || axiosError.message
      );
    } else {
      console.error('Unexpected error:', error);
    }
  }
};
