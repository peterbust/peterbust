/**
 * Creates a debounced function that delays invoking 'func' until after 'wait' milliseconds have elapsed since the last time the debounced function was invoked.
 */
const debounce = (func: () => unknown, wait: number) => {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => func(), wait);
  };
};

export default debounce;
