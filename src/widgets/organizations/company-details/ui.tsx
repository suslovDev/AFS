import { organizationStore } from '@entities/organization';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { DetailsEdit } from '@features/organizations';
import { DetailsView } from './ui/details-view';

export const CompanyDetails = observer(() => {
  const [mode, setMode] = useState('view');

  const details = organizationStore.organization;
  if (!details) {
    return null;
  }

  return (
    <>
      {mode === 'view' ? (
        <DetailsView onEditClick={() => setMode('edit')} details={details} />
      ) : (
        <DetailsEdit
          onCanselClick={() => setMode('view')}
          onSaveClick={() => setMode('view')}
          details={details}
        />
      )}
    </>
  );
});
