export function generateRandomString() {
  return Math.random().toString(36).slice(2)
}

export const getCurrentUrl = ({ port }: { port?: string } = {}) => {
  const url = new URL(window.location.href)

  if (port) {
    url.port = port
  }

  return url
}
