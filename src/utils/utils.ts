/**
 * Converts the first letter of the input string to lowercase.
 * @param str - The input string to transform.
 * @returns A new string with the first letter converted to lowercase.
 */
export function uncapitalizeFirstLetter(str: string): string {
  if (!str) {
    return str;
  }
  return str.charAt(0).toLowerCase() + str.slice(1);
}
