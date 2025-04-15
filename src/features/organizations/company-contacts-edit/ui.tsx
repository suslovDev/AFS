import { Contact } from '@shared/types';
import { BlockInfo, EditorAction, LineInfo, TextInput } from '@shared/ui';
import { useFormKeyEvents } from '../company-details-edit/model';
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

  const { formRef, handleKeyDown, handleSubmit } = useFormKeyEvents(
    onSaveClick,
    onCanselClick,
    updateContact
  );

  return (
    <form ref={formRef} onSubmit={handleSubmit} onKeyDown={handleKeyDown} tabIndex={-1}>
      <BlockInfo
        childrenClassName={st.editor}
        title="Contacts"
        Action={
          <div className={st.editor__actions}>
            <EditorAction onCansel={onCanselClick} />
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
    </form>
  );
};
