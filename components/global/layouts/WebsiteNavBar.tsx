import { Typography } from '@components/global/primitives/Typography'
import { websiteNavValuesAtom, WebsiteNavValuesEnum } from '@state/WebsiteNavBarState'
import cx from 'clsx'
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'
import React from 'react'

export const WebsiteNavBar = ({ initialValue }: { initialValue?: WebsiteNavValuesEnum }): JSX.Element => {
  const router = useRouter()
  //state
  const [navValue, updateNavValue] = useAtom(websiteNavValuesAtom)

  //functions
  const useSetInitialValue = () => {
    React.useEffect(() => {
      if (initialValue) {
        updateNavValue(initialValue)
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
              updateNavValue(WebsiteNavValuesEnum[key])
              await router.push(getLinkUrls(WebsiteNavValuesEnum[key]))
            }}
            className={cx('cursor-pointer rounded-b-[17px] px-[16px] pt-[41px] pb-[22px]', {
              'bg-transparent': navValue !== key,
              'bg-app-purple': navValue === key
            })}>
            <Typography.TitleOne
              className={cx('', {
                'text-app-purple': navValue !== key,
                'bg-app-purple text-white': navValue === key
              })}>
              {WebsiteNavValuesEnum[key]}
            </Typography.TitleOne>
          </div>
        ))}
      </div>
    </div>
  )
}
