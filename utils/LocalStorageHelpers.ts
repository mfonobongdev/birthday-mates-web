export const getLocalStorage = (key: string): any | undefined => {
  if (typeof window === 'undefined') return undefined

  const value = window.localStorage.getItem(key)
  if (value) {
    return JSON.parse(value)
  }

  return undefined
}
export const setLocalStorage = (key: string, value: any) => window.localStorage.setItem(key, JSON.stringify(value))

export const removeLocalStorage = (key: string) => window.localStorage.removeItem(key)
