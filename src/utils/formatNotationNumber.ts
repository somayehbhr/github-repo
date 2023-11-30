export const formatNotationNumber = (number: number) => {
  return new Intl.NumberFormat("en", { notation: "compact" }).format(number);
};
