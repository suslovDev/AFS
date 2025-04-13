import { useAuthForm } from '@features/auth/models/use-auth-form.ts';
import { Card, TextButton, TextInput } from '@shared/ui';
import { useAuthRedirect, useSignUp } from '../models';
import st from './styles.module.scss';

export const AuthForm = () => {
  const { isDisabled, value, setValue } = useAuthForm();
  const { hasError, handleAuth } = useSignUp(value);

  useAuthRedirect();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAuth();
  };

  return (
    <Card>
      <form className={st.form} onSubmit={handleSubmit}>
        <h3 className={st.form__heading}>Please, enter your USERNAME</h3>

        <TextInput value={value} onChange={(e) => setValue(e.target.value)} />

        <div className={st.form__actions}>
          <TextButton type="submit" disabled={isDisabled}>
            Get the TOKEN &#x1f60e;
          </TextButton>
        </div>
      </form>

      {hasError && (
        <p className={st.error}>
          <b>An error occurred: </b>
          {hasError}
        </p>
      )}
    </Card>
  );
};
