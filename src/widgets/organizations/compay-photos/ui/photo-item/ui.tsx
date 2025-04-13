import { useState } from 'react';
import { removePhoto } from '@features/organizations/company-remove-photo';
import { Trash } from '@shared/icons';
import { IconButton, Loader } from '@shared/ui';
import st from './styles.module.scss';

interface Props {
  url: string;
  photoName: string;
  companyId: string;
}

export const PhotoItem: React.FC<Props> = ({ url, photoName, companyId }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleRemovePhoto = async () => {
    removePhoto(photoName, companyId);
  };

  return (
    <li className={st.image}>
      <IconButton className={st.image__action} size="small" onClick={handleRemovePhoto}>
        <Trash />
      </IconButton>
      {isImageLoading && <Loader />}

      {url && <img src={url} onLoad={handleImageLoad} />}
    </li>
  );
};
