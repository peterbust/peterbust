/**
 * Capitalizes the first character of a string.
 */
const capitalizeFirst = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default capitalizeFirst;
