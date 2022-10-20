import { NextPage } from 'next'
import { WebsiteNavBar } from '@components/global/layouts/WebsiteNavBar'
import { WebsiteNavValuesEnum } from '@state/WebsiteNavBarState'
import { WebsiteFooter } from '@components/global/layouts/WebsiteFooter'
import Image from 'next/image'
import appBackground from '/public/assets/background.png'
import { Typography } from '@components/global/primitives/Typography'
import React from 'react'

const Help: NextPage = () => {
  return (
    <div>
      {/*header*/}
      <section className={'relative grid grid-cols-1 grid-rows-[max-content_max-content]'}>
        {/*background*/}
        <div className={'absolute inset-0 -z-50'}>
          <Image className='object-cover' src={appBackground} layout='fill' alt={'three circles with different colors'} />
        </div>

        {/*navbar*/}
        <WebsiteNavBar initialValue={WebsiteNavValuesEnum.Help} />

        {/*hero  content*/}
        <div className={'container grid h-[400px] grid-cols-2 grid-rows-1 place-items-center'}>
          <div className={'space-y-10 justify-self-start'}>
            {/*heading*/}
            <div>
              <Typography.Custom className={'font-main text-[31.3876px] font-bold uppercase leading-[32px] text-app-purple'}>
                Help Desk
              </Typography.Custom>
              <Typography.Custom className={'mt-[20px] font-main text-[17px] leading-[17.42px]'}>
                If your complaint isn’t part of the FAQ, send us
                <br /> a message and we would get back to you as <br />
                soon as possible.
              </Typography.Custom>
            </div>
          </div>
        </div>
      </section>

      <section className={'container'}>
        <div className={'grid grid-cols-1 place-items-center gap-10 py-20'}>
          <Typography.Custom className={'font-main text-[18.03px] font-bold leading-[32px] text-app-purple'}>FAQ</Typography.Custom>
        </div>
      </section>

      <WebsiteFooter />
    </div>
  )
}

export default Help
