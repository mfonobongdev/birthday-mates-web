import { atom } from 'jotai'

export enum WebsiteNavValuesEnum {
  Home = 'Home',
  Login = 'Login',
  Help = 'Help'
}

export const websiteNavValuesAtom = atom<WebsiteNavValuesEnum>(WebsiteNavValuesEnum.Home)
