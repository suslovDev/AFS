import { contactStore } from '@entities/contacts';
import organizationStore from '@entities/organization/model';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import api from '@shared/config/api';
import { COMPANY_API, CONTACTS_API } from '../api';

export const useLoadCompanyInfo = (companyId: string): void => {
  const [isLoaded, setIsLoaded] = useState(false);

  const getData = async () => {
    try {
      const dataCompany = (await api.get(`${COMPANY_API}/${companyId}`)).data;
      organizationStore.setOrganization(dataCompany);

      const dataContacts = (await api.get(`${CONTACTS_API}/${String(dataCompany.contactId)}`)).data;
      contactStore.setContact(dataContacts);
      setIsLoaded(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error;
        console.error(
          'Error fetching company info:',
          axiosError.response?.data || axiosError.message
        );
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  useEffect(() => {
    if (!isLoaded) {
      getData();
    }
  }, [companyId, isLoaded]);
};
