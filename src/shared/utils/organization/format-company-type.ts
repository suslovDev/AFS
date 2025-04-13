export const formatCompanyType = (types: string[]) => {
  return types.map((type) => {
    const [firstPart, ...rest] = type.split('_');
    const formattedFirstPart = firstPart.charAt(0).toUpperCase() + firstPart.slice(1);
    const formattedRest = rest
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
    return `${formattedFirstPart} ${formattedRest}`;
  });
};

export const toSnakeCase = (types: string[]) => {
  return types.map((type) => {
    const words = type.split(' ');
    const unformattedFirstPart = words[0].toLowerCase();
    const unformattedRest = words
      .slice(1)
      .map((word) => word.toLowerCase())
      .join('_');
    return `${unformattedFirstPart}_${unformattedRest}`;
  });
};
