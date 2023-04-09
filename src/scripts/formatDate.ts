/**
 * Return string from date in YYYY-MM-DD format
 * @param date date to format
 * @returns string in YYYY-MM-DD format
 */
export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}