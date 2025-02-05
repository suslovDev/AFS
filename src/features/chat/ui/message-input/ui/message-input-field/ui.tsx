import { ChangeEvent, forwardRef, Ref, useState } from 'react';
import st from './styles.module.scss';

interface Props {
  onChange: (value: string) => void;
  value: string;
  ref?: Ref<HTMLInputElement>;
}

export const MesageInputField = forwardRef<HTMLInputElement, Props>(({ onChange, value }, ref) => {
  const [inputTouched, setInputTouched] = useState(false);

  const placeholder = `${inputTouched ? 'Введите сообщение' : ''}`;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      autoComplete="off none"
      className={st.input}
      ref={ref}
      onFocus={() => setInputTouched(true)}
      onBlur={() => setInputTouched(false)}
    />
  );
});
