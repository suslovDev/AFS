import { format, parseISO } from 'date-fns';
import { Edit } from '@shared/icons';
import { Organization } from '@shared/types';
import { BlockInfo, LabeledButton, LineInfo } from '@shared/ui';
import { formatCompanyType } from '@shared/utils';
import { AgreementLineView } from '../agrinment-line-view';

interface Props {
  onEditClick: () => void;
  details: Organization;
}

export const DetailsView = ({ details, onEditClick }: Props) => {
  const {
    businessEntity,
    contract: { issue_date, no },
    type,
  } = details;

  const formatedDate = format(parseISO(issue_date), 'MM.dd.yyyy');
  const companyType = formatCompanyType(type).join(', ');

  return (
    <BlockInfo
      title="Company Details"
      Action={
        <LabeledButton size="small" variant="outlined" startIcon={<Edit />} onClick={onEditClick}>
          Edit
        </LabeledButton>
      }
    >
      <LineInfo title="Agreement" content={<AgreementLineView number={no} date={formatedDate} />} />
      {businessEntity && <LineInfo title="Business entity" content={businessEntity} />}
      <LineInfo title="Company type" content={companyType} />
    </BlockInfo>
  );
};
