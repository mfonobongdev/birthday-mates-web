import { Typography } from '@components/global/primitives/Typography'
import { NavigationStore, WebsiteNavValuesEnum } from '@state/NavigationState'
import cx from 'clsx'
import { useRouter } from 'next/router'
import React from 'react'

export const WebsiteNavBar = ({ initialValue }: { initialValue?: WebsiteNavValuesEnum }): JSX.Element => {
  const router = useRouter()
  //state
  const [websiteNavSelectedLink, updateWebsiteNavSelectedLink] = NavigationStore((state) => [
    state.websiteNavSelectedLink,
    state.updateWebsiteNavSelectedLink
  ])

  //functions
  const useSetInitialValue = () => {
    React.useEffect(() => {
      if (initialValue) {
        updateWebsiteNavSelectedLink(initialValue)
      }
    }, [])
  }

  const getLinkUrls = (type: WebsiteNavValuesEnum) => {
    switch (type) {
      case WebsiteNavValuesEnum.Home:
        return '/'
      case WebsiteNavValuesEnum.Login:
        return '/login'
      case WebsiteNavValuesEnum.Help:
        return '/help'
      default:
        return '/'
    }
  }

  //calls
  useSetInitialValue()

  return (
    <div className={'container flex justify-between'}>
      {/*logo*/}
      <div className={'pt-[41px] pb-[22px]'}>
        <Typography.TitleOne className={'text-app-purple'}>Birthday Mates</Typography.TitleOne>
      </div>

      {/*links*/}
      <div className={'flex space-x-[120px]'}>
        {(Object.keys(WebsiteNavValuesEnum) as Array<keyof typeof WebsiteNavValuesEnum>).map((key, index) => (
          <div
            key={`${key}${index}`}
            onClick={async () => {
              updateWebsiteNavSelectedLink(WebsiteNavValuesEnum[key])
              await router.push(getLinkUrls(WebsiteNavValuesEnum[key]))
            }}
            className={cx('cursor-pointer rounded-b-[17px] px-[16px] pt-[41px] pb-[22px]', {
              'bg-transparent': websiteNavSelectedLink !== key,
              'bg-app-purple': websiteNavSelectedLink === key
            })}>
            <Typography.TitleOne
              className={cx('', {
                'text-app-purple': websiteNavSelectedLink !== key,
                'bg-app-purple text-white': websiteNavSelectedLink === key
              })}>
              {WebsiteNavValuesEnum[key]}
            </Typography.TitleOne>
          </div>
        ))}
      </div>
    </div>
  )
}
