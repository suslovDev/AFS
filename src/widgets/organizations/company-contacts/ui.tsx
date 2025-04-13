import { contactStore } from '@entities/contacts';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { ContactsEdit } from '@features/organizations';
import { ContactsView } from './ui/details-view';

export const CompanyContacts = observer(() => {
  const [mode, setMode] = useState('view');
  const contacts = contactStore.contact;

  if (!contacts) {
    return null;
  }

  return (
    <>
      {mode === 'view' ? (
        <ContactsView onEditClick={() => setMode('edit')} contacts={contacts} />
      ) : (
        <ContactsEdit
          onCanselClick={() => setMode('view')}
          onSaveClick={() => setMode('view')}
          contacts={contacts}
        />
      )}
    </>
  );
});
