export type ThrottleOptions = {
  intervalMs: number;
  leading?: boolean;
};

/** Throttles repeated calls to `fn` so it runs at most once per `intervalMs`. */
export function throttle<T extends (...args: never[]) => unknown>(
  fn: T,
  options: ThrottleOptions,
): T {
  let lastCall = 0;
  return ((...args: never[]) => {
    const now = Date.now();
    if (now - lastCall >= options.intervalMs) {
      lastCall = now;
      return fn(...args);
    }
    return undefined;
  }) as T;
}
