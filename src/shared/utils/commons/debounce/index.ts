let timeout: NodeJS.Timeout | null = null

export const debounce = <T>(
  value: T,
  delay: number,
  callback: (value: T) => void
): void => {
  if (timeout) {
    clearTimeout(timeout)
  }

  timeout = setTimeout(() => {
    callback(value)
  }, delay)
}
