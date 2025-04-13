import st from './styles.module.scss';

export const Loader = () => {
  return (
    <div className={st.wrap}>
      <span className={st.loader} />
    </div>
  );
};
