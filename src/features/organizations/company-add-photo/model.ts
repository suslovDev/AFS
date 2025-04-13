import { organizationStore } from '@entities/organization';
import axios, { AxiosError } from 'axios';
import { useRef } from 'react';
import api from '@shared/config/api';
import { getCompanyImageUploadUrl } from '../api';

export const useAddPhotoCompany = (companyId: string) => {
  const inputRef = useRef<any>(null);

  const addPhoto = async (file: File) => {
    const photoUrl = getCompanyImageUploadUrl(companyId);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await api.post(photoUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const createdPhoto = response.data;
      organizationStore.addPhoto(createdPhoto);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error;
        console.error('Error add company photo:', axiosError.response?.data || axiosError.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  const handleAddImage = () => {
    if (!inputRef) return;
    inputRef.current.click();
  };

  const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const photoToCreate = event.target.files[0];
      addPhoto(photoToCreate);
    }
  };

  return {
    handleAddImage,
    onInputChange,
    inputRef,
  };
};
