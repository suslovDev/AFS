import { Check, Cross } from '@shared/icons';
import { Organization } from '@shared/types';
import { BlockInfo, LabeledButton, LineInfo, Selector } from '@shared/ui';
import { formatCompanyType } from '@shared/utils';
import { AgrinmentLineEdit } from '../../../widgets/organizations/company-details/ui/agrinment-line-edit';
import { useEditDitails, useFormKeyEvents } from './model';
import st from './styles.module.scss';

interface Props {
  details: Organization;
  onCanselClick: () => void;
  onSaveClick: () => void;
}

export const DetailsEdit = ({ details, onCanselClick, onSaveClick }: Props) => {
  const {
    contractNumber,
    date,
    initCompanyTypeValue,
    initEnityValue,
    setContractNumber,
    setDate,
    setEntity,
    setCompanyType,
    updateDetails,
  } = useEditDitails(details);

  const { formRef, handleKeyDown, handleSubmit } = useFormKeyEvents(
    onSaveClick,
    onCanselClick,
    updateDetails
  );

  return (
    <form ref={formRef} onSubmit={handleSubmit} onKeyDown={handleKeyDown} tabIndex={-1}>
      <BlockInfo
        childrenClassName={st.editor}
        title="Company Details"
        Action={
          <div className={st.editor__actions}>
            <LabeledButton type="submit" size="small" variant="outlined" startIcon={<Check />}>
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
        <AgrinmentLineEdit
          number={contractNumber}
          date={date}
          setDate={setDate}
          setNumber={setContractNumber}
        />
        <LineInfo
          title="Business entity"
          content={
            <Selector
              initialValue={[initEnityValue]}
              isMultible={false}
              onChange={setEntity}
              options={['Partnership']}
            />
          }
        />
        <LineInfo
          title="Company type"
          content={
            <Selector
              onChange={setCompanyType}
              initialValue={initCompanyTypeValue}
              options={formatCompanyType([
                'funeral_home',
                'logistics_services',
                'burial_care_contractor',
              ])}
            />
          }
        />
      </BlockInfo>
    </form>
  );
};
