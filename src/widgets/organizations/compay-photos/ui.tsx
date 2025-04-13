import organizationStore from '@entities/organization/model';
import { observer } from 'mobx-react-lite';
import { AddPhoto } from '@features/organizations';
import { Photo } from '@shared/types';
import { BlockInfo } from '@shared/ui';
import st from './styles.module.scss';
import { PhotoItem } from './ui/photo-item/ui';

export const CompanyPhotos = observer(() => {
  const photos = organizationStore.organization?.photos;

  const companyId = organizationStore.organization?.id;
  if (!companyId) {
    return null;
  }

  return (
    <>
      <BlockInfo className={st.block} title="Photos" Action={<AddPhoto companyId={companyId} />}>
        <ul className={st.photos}>
          {photos &&
            photos.map((photo: Photo) => (
              <PhotoItem
                url={photo.thumbpath}
                photoName={photo.name}
                companyId={companyId}
                key={photo.name}
              />
            ))}
        </ul>
      </BlockInfo>
    </>
  );
});
