export function useWatchUrlChange(
  callback: (newUrl: string, oldUrl: string) => void,
  interval: number = 500,
): () => void {
  let lastUrl = location.href

  const timer = window.setInterval(() => {
    const currentUrl = location.href
    if (currentUrl !== lastUrl) {
      const oldUrl = lastUrl
      lastUrl = currentUrl
      callback(currentUrl, oldUrl)
    }
  }, interval)

  return function stopWatching(): void {
    clearInterval(timer)
  }
}
