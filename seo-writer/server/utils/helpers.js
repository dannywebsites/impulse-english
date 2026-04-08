/**
 * Sleep for a given number of milliseconds.
 * Used for cooldown delays between pipeline steps.
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
