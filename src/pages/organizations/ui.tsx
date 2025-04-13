import organizationStore from '@entities/organization/model';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Info } from '@widgets/organizations';
import { useLoadCompanyInfo } from '@features/organizations';
import { ChangeNameCopmany } from '@features/organizations/company-name-edit';
import { DeleteCompany } from '@features/organizations/company-remove';
import { Chevrone } from '@shared/icons';
import { Container } from '@shared/ui';
import { ClicableIcon } from '@shared/ui/buttons';
import st from './styles.module.scss';

export const OrganizationsPage = observer(() => {
  const navigate = useNavigate();
  useLoadCompanyInfo('12');
  const organization = organizationStore.organization;

  if (!organization) {
    return null;
  }

  return (
    <Container>
      <header className={st.header}>
        <ClicableIcon className={st.back} onClick={() => navigate(-1)}>
          <Chevrone />
        </ClicableIcon>
        <h1 className={st.heading}>{organization.name}</h1>
        <div className={st.actions}>
          <ChangeNameCopmany companyId={organization.id} companyName={organization?.name} />
          <DeleteCompany companyId={organization.id} />
        </div>
      </header>
      <Info />
    </Container>
  );
});
