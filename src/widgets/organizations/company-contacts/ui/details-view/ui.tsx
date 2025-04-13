import { Edit } from '@shared/icons';
import { Contact } from '@shared/types';
import { BlockInfo, LabeledButton, LineInfo } from '@shared/ui';

interface Props {
  onEditClick?: () => void;
  contacts: Contact;
}

export const ContactsView = ({ onEditClick, contacts }: Props) => {
  const { email, firstname, lastname, phone } = contacts;

  return (
    <BlockInfo
      title="Contacts"
      Action={
        <LabeledButton size="small" variant="outlined" startIcon={<Edit />} onClick={onEditClick}>
          Edit
        </LabeledButton>
      }
    >
      <LineInfo title="Responsible person" content={`${lastname} ${firstname}`} />
      <LineInfo title="Phone number" content={phone} />
      <LineInfo title="E-mail" content={email} />
    </BlockInfo>
  );
};
