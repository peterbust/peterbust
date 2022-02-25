/**
 * Converts a px value to rem
 */
export default function rem(n: number): string {
  return `${n / 16}rem`;
}
