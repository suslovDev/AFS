import st from './styles.module.scss';

interface Props {
  text: string;
}

export const TextMessage = ({ text }: Props): JSX.Element => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <span style={{ color: 'white' }}>
        <TailIn />
      </span>
      <div
        style={{
          borderRadius: '7.5px',
          borderTopLeftRadius: '0',
          padding: '6px 7px 8px 9px',

          position: 'absolute',
          top: '1px',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        {text}
      </div>
    </div>
  );
};
