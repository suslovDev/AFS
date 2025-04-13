import { useState } from 'react';

export const useAuthForm = () => {
  const [value, setValue] = useState('');
  const isDisabled = !value.trim().length;

  return { isDisabled, value, setValue };
};
