export const getSessionStorage = (key: string): any | undefined => {
  if (typeof window === 'undefined') return undefined

  const value = window.sessionStorage.getItem(key)
  if (value) {
    return JSON.parse(value)
  }

  return undefined
}
export const setSessionStorage = (key: string, value: any) => window.sessionStorage.setItem(key, JSON.stringify(value))

export const removeSessionStorage = (key: string) => window.sessionStorage.removeItem(key)
