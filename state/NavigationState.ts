import create from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'

export enum WebsiteNavValuesEnum {
  Home = 'Home',
  Login = 'Login',
  Help = 'Help'
}

type State = {
  websiteNavSelectedLink: WebsiteNavValuesEnum
}

type Action = {
  updateWebsiteNavSelectedLink: (websiteNavSelectedLink: State['websiteNavSelectedLink']) => void
}

export const NavigationStore = create<State & Action>((set) => ({
  websiteNavSelectedLink: WebsiteNavValuesEnum.Home,
  updateWebsiteNavSelectedLink: (websiteNavSelectedLink) => set(() => ({ websiteNavSelectedLink: websiteNavSelectedLink }))
}))

//devtool
if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('NavigationStore', NavigationStore)
}
