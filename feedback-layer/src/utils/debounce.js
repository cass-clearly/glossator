/**
 * Returns a debounced version of the given function.
 * The function will only execute after `ms` milliseconds have elapsed
 * since the last invocation.
 */
export function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}
