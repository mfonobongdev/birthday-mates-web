import { Typography } from '@components/global/primitives/Typography'
import Link from 'next/link'
import React from 'react'

export const WebsiteFooter = (): JSX.Element => {
  return (
    <footer className={'border-t-[8px] border-app-purple bg-[#FAFAFA] py-[100px]'}>
      <div className={'container grid grid-cols-3 grid-rows-1 place-items-start gap-10'}>
        <div>
          <Typography.Custom className={'mb-[43px] font-main text-[24px] font-semibold leading-[25px] text-app-purple'}>
            Privacy
          </Typography.Custom>

          <Typography.Custom className={'mb-[32px] cursor-pointer font-main text-[16px] font-normal leading-[16px]'}>
            <Link href={'/privacy'}>Privacy Policy</Link>
          </Typography.Custom>

          <Typography.Custom className={'mb-[32px] cursor-pointer font-main text-[16px] font-normal leading-[16px]'}>
            <Link href={'/privacy'}>Privacy Statement </Link>
          </Typography.Custom>
        </div>
        <div>
          <Typography.Custom className={'mb-[43px] font-main text-[24px] font-semibold leading-[25px] text-app-purple'}>
            About Us
          </Typography.Custom>

          <Typography.Custom className={'mb-[32px] cursor-pointer font-main text-[16px] font-normal leading-[16px]'}>
            <Link href={'#'}> About Us</Link>
          </Typography.Custom>
        </div>
        <div>
          <Typography.Custom className={'mb-[43px] font-main text-[24px] font-semibold leading-[25px] text-app-purple'}>
            Contact Us
          </Typography.Custom>

          <Typography.Custom className={'mb-[32px] cursor-pointer font-main text-[16px] font-normal leading-[16px]'}>
            <Link href={'#'}>2304 -234 - 2342 </Link>
          </Typography.Custom>

          <Typography.Custom className={'mb-[32px] cursor-pointer font-main text-[16px] font-normal leading-[16px]'}>
            <Link href={'#'}>birthdaymates@helpdesk.com </Link>
          </Typography.Custom>
        </div>
      </div>
    </footer>
  )
}
