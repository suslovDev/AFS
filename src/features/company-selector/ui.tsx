import { useEffect, useState } from 'react';
import { Selector } from '@shared/ui';
import st from './styles.module.scss';

export const CompanySelector = () => {
  const [selectedItems, setSelectedItems] = useState<any>();

  const options = ['Funeral Home', 'Logistics services', 'Burial care Contractor'];

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  return (
    <div className={st.wrap}>
      <Selector onChange={setSelectedItems} options={options} />
    </div>
  );
};
