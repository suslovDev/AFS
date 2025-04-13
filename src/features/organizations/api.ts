import { BASE_URL } from '@shared/config/api';

export const COMPANY_API = `${BASE_URL}/companies`;
export const CONTACTS_API = `${BASE_URL}/contacts`;

export const getCompanyImageUrl = (companyId: string, photoName: string): string => {
  return `${COMPANY_API}/${companyId}/image/${photoName}`;
};

export const getCompanyImageUploadUrl = (companyId: string): string => {
  return `${COMPANY_API}/${companyId}/image`;
};
