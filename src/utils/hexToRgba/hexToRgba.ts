/**
 * Converts a hex value to a rgba CSS value.
 *
 * @param hex The hex value to convert
 * @param alpha The alpha (opacity) value to use
 * @returns The rgba CSS value
 */
export default function hexToRgba(hex: string, alpha: number) {
  // Expand shorthand value (e.g. "03F") to full value (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (result) {
    const r = parseInt(result[1], 16);
    const b = parseInt(result[2], 16);
    const g = parseInt(result[3], 16);
    const a = alpha <= 1 ? alpha : 1;

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  return null;
}
