export const formatPhoneNumber = (
  phoneNumber: string,
  formatType: 'display' | 'api' = 'display'
) => {
  const match = phoneNumber?.match(/(\+7|7|8)?(\d{3})(\d{3})(\d{2})(\d{2})/);
  if (!match) return phoneNumber;
  const [, , areaCode, firstThree, secondTwo, lastTwo] = match;
  const formatted = `+7 ${areaCode} ${firstThree}-${secondTwo}-${lastTwo}`;
  return formatType === 'api' ? `7${areaCode}${firstThree}${secondTwo}${lastTwo}` : formatted;
};
