import { setPhone } from '@entities/opponent/models';
import { useDispatch, useSelector } from 'react-redux';

export const useOpponentPhone = () => {
  const opponentPhone = useSelector((state: RootState) => state.opponent.phone);

  const dispatch = useDispatch();

  const setOpponentPhone = (phone: string) => dispatch(setPhone(phone));

  return {
    opponentPhone,
    setOpponentPhone,
  };
};
