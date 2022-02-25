/**
 * Capitalize the first letter of a string
 *
 * @param s String to capitalize
 * @returns Capitalized string
 */
export default function capitalizeFirst(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
