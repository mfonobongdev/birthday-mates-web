import { removeSessionStorage } from '@utils/SessionStorageHelpers'
import { removeLocalStorage } from '@utils/LocalStorageHelpers'
import create from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { getLocalStorage, setLocalStorage } from '@utils/LocalStorageHelpers'
import { getSessionStorage, setSessionStorage } from '@utils/SessionStorageHelpers'

type User = {
  id: number
  fullName: string
  email: string
  phone: string
  photo: string
  coverPhoto: string
  location: string
  summary: string
  isEmailVerified: boolean
  isAnOrganization: boolean
  isPhoneVerified: boolean
}

type State = {
  liu: User | undefined
  authToken: string | undefined
  isLoggedIn: boolean
}

type Action = {
  updateLiu: (liu: State['liu']) => void
  updateAuthToken: (authToken: State['authToken']) => void
  updateIsLoggedIn: (isLoggedIn: State['isLoggedIn']) => void
  removeLiu: () => void
  removeAuthToken: () => void
}

export const AuthenticationStore = create<State & Action>((set) => ({
  //liu
  liu: getLocalStorage('authUID'),
  updateLiu: (liu) =>
    set(() => {
      setLocalStorage('authUID', liu)
      return { liu }
    }),
  removeLiu: () =>
    set(() => {
      removeLocalStorage('authUID')
      return { liu: undefined }
    }),

  //authToken
  authToken: getSessionStorage('authT'),
  updateAuthToken: (authToken) =>
    set(() => {
      setSessionStorage('authT', authToken)
      return { authToken }
    }),
  removeAuthToken: () =>
    set(() => {
      removeSessionStorage('authT')
      return { liu: undefined }
    }),

  //IsLoggedIn
  isLoggedIn: Boolean(getLocalStorage('authLoggedIn')),
  updateIsLoggedIn: (isLoggedIn) =>
    set(() => {
      setLocalStorage('authLoggedIn', isLoggedIn)
      return { isLoggedIn }
    })
}))

//devtool
if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('AuthenticationStore', AuthenticationStore)
}
