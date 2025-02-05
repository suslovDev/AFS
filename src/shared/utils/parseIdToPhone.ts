export const parseIdToPhone = (id: string) => {
  return `8${id.substring(1, 12)}`;
};
