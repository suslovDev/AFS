import { TailIn } from '../../icons';

//import st from "./styles.module.scss";

export const MessageIn = ({ text, type }: { text: string; type: 'out' | 'in' }): JSX.Element => {
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
          background: type === 'out' ? 'white' : 'green',
          position: 'absolute',
          top: '1px',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'sans-serif',
          left: type === 'out' ? '8px' : '80%',
        }}
      >
        {text}
      </div>
    </div>
  );
};
