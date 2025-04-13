import { CompanyContacts } from '../company-contacts';
import { CompanyDetails } from '../company-details';
import { CompanyPhotos } from '../compay-photos';
import st from './styles.module.scss';

export const Info = () => {
  return (
    <div className={st.info}>
      <CompanyDetails />
      <CompanyContacts />
      <CompanyPhotos />
    </div>
  );
};
