export type RetryOptions = {
  maxAttempts?: number;
  baseDelayMs?: number;
  onError?: (e: unknown, attempt: number) => void;
};

export async function retry<T>(fn: () => Promise<T>, opts: RetryOptions = {}): Promise<T> {
  const { maxAttempts = 3, baseDelayMs = 200, onError } = opts;
  let lastErr: unknown;
  for (let i = 1; i <= maxAttempts; i++) {
    try { return await fn(); }
    catch (e) {
      lastErr = e;
      onError?.(e, i);
      if (i < maxAttempts) await new Promise(r => setTimeout(r, baseDelayMs * 2 ** (i - 1)));
    }
  }
  throw lastErr;
}
