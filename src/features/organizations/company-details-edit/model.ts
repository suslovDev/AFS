import { organizationStore } from '@entities/organization';
import axios, { AxiosError } from 'axios';
import { useEffect, useRef, useState } from 'react';
import api from '@shared/config/api';
import { Organization } from '@shared/types';
import { formatCompanyType, toSnakeCase } from '@shared/utils';
import { COMPANY_API } from '../api';

export const updateOrganization = async (id: string, data: Partial<Organization>) => {
  try {
    const response = await api.patch(`${COMPANY_API}/${id}`, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const updatedDetails = response.data;
    organizationStore.updateOrganization(updatedDetails);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      console.error('Error updating details:', axiosError.response?.data || axiosError.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

export const useEditDitails = (details: Organization) => {
  const {
    id,
    businessEntity,
    contract: { issue_date, no },
    type,
  } = details;
  const [contractNumber, setContractNumber] = useState(no);
  const [date, setDate] = useState(issue_date);
  const [companyType, setCompanyType] = useState<string[]>([]);
  const [entity, setEntity] = useState<string[]>([]);

  const formatedCompanyType = formatCompanyType(type);

  const ditailsToUpdate: Partial<Organization> = {
    businessEntity: entity[0],
    contract: { issue_date: date, no: contractNumber },
    type: toSnakeCase(companyType),
  };

  const updateDetails = () => updateOrganization(id, ditailsToUpdate);

  return {
    contractNumber,
    setContractNumber,
    date,
    setDate,
    entity,
    setEntity,
    setCompanyType,
    initEnityValue: businessEntity,
    initCompanyTypeValue: formatedCompanyType,
    updateDetails,
  };
};

export const useFormKeyEvents = (
  onSave: () => void,
  onCansel: () => void,
  updateDetails: () => void
) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateDetails();
    onSave();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!formRef.current) {
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();

      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onCansel();
    }
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.focus();
    }
  }, []);

  return { formRef, handleKeyDown, handleSubmit };
};
