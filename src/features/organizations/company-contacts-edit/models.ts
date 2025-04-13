import { contactStore } from '@entities/contacts';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import api from '@shared/config/api';
import { Contact } from '@shared/types';
import { CONTACTS_API } from '../api';

export const useEditContact = (contact: Contact) => {
  const { email, firstname, lastname, phone, id } = contact;
  const [emailValue, setEmailValue] = useState(email);
  const [nameValue, setNameValue] = useState(`${lastname} ${firstname}`);
  const [phoneValue, setPhoneValue] = useState(phone);

  const updateContact = async () => {
    try {
      const contactToUpdate: Contact = {
        id,
        email: emailValue,
        firstname: nameValue.split(' ')[1],
        lastname: nameValue.split(' ')[0],
        phone: phoneValue,
      };
      const response = await api.patch(`${CONTACTS_API}/${id}`, JSON.stringify(contactToUpdate));
      const updatedContact = response.data;
      contactStore.updateContact(updatedContact);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error;
        console.error('Error updating contact:', axiosError.response?.data || axiosError.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  return {
    emailValue,
    setEmailValue,
    nameValue,
    setNameValue,
    phoneValue,
    setPhoneValue,
    updateContact,
  };
};
