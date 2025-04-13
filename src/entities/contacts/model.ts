import { makeAutoObservable } from 'mobx';
import { Contact } from '@shared/types';

class ContactStore {
  contact: Contact | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setContact(contact: Contact) {
    this.contact = contact;
  }

  updateContact(partialContact: Partial<Contact>) {
    if (this.contact) {
      this.contact = { ...this.contact, ...partialContact };
    }
  }
}

const contactStore = new ContactStore();
export default contactStore;
