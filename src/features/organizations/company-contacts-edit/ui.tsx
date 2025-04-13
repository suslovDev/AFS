import { Check, Cross } from '@shared/icons';
import { Contact } from '@shared/types';
import { BlockInfo, LabeledButton, LineInfo, TextInput } from '@shared/ui';
import { useEditContact } from './models';
import st from './styles.module.scss';

interface Props {
  contacts: Contact;
  onCanselClick: () => void;
  onSaveClick: () => void;
}

export const ContactsEdit = ({ contacts, onCanselClick, onSaveClick }: Props) => {
  const {
    nameValue,
    phoneValue,
    emailValue,
    setNameValue,
    setPhoneValue,
    setEmailValue,
    updateContact,
  } = useEditContact(contacts);

  const handleSaveClick = () => {
    updateContact();
    onSaveClick();
  };

  return (
    <BlockInfo
      childrenClassName={st.editor}
      title="Contacts"
      Action={
        <div className={st.editor__actions}>
          <LabeledButton
            size="small"
            variant="outlined"
            startIcon={<Check />}
            onClick={handleSaveClick}
          >
            Save changes
          </LabeledButton>
          <LabeledButton
            size="small"
            variant="outlined"
            startIcon={<Cross />}
            onClick={onCanselClick}
          >
            Cancel
          </LabeledButton>
        </div>
      }
    >
      <LineInfo
        title="Responsible person"
        content={<TextInput value={nameValue} onChange={(e) => setNameValue(e.target.value)} />}
      />
      <LineInfo
        title="Phone number"
        content={<TextInput value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} />}
      />
      <LineInfo
        title="E-mail"
        content={<TextInput value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />}
      />
    </BlockInfo>
  );
};
