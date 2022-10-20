import { NextPage } from 'next'
import { WebsiteNavBar } from '@components/global/layouts/WebsiteNavBar'
import { WebsiteFooter } from '@components/global/layouts/WebsiteFooter'
import Image from 'next/image'
import appBackground from '/public/assets/background.png'
import { Typography } from '@components/global/primitives/Typography'
import React from 'react'

const Privacy: NextPage = () => {
  return (
    <div>
      {/*header*/}
      <section className={'relative grid grid-cols-1 grid-rows-[max-content_max-content]'}>
        {/*background*/}
        <div className={'absolute inset-0 -z-50'}>
          <Image className='object-cover' src={appBackground} layout='fill' alt={'three circles with different colors'} />
        </div>

        {/*navbar*/}
        <WebsiteNavBar />

        {/*hero  content*/}
        <div className={'container grid h-[400px] grid-cols-2 grid-rows-1 place-items-center'}>
          <div className={'space-y-10 justify-self-start'}>
            {/*heading*/}
            <div>
              <Typography.Custom className={'font-main text-[31.3876px] font-bold uppercase leading-[32px] text-app-purple'}>
                Privacy Policy
              </Typography.Custom>
            </div>
          </div>
        </div>
      </section>

      <section className={'container'}>
        <div className={'grid grid-cols-1 place-items-start gap-10 py-48'}>
          <Typography.Custom className={'font-main text-[18.03px] font-bold leading-[32px] text-app-purple'}>
            Information we collect:
          </Typography.Custom>
          <Typography.Custom className={'font-main text-[18.03px] leading-[32px]'}>
            Yara collects information from enquiry forms, contacts forms, Google GSuite or Microsoft Office 365, and others, as applicable
            to provide better service to all users. This includes first name, last name, email address, phone numbers and email groups that
            users belong to. We store this personal information on Google Cloud Services. Our legal basis for the collection of user data is
            Art 6 (1) b) GDPR and Art. 6 (1) f) GDPR. Our legitimate interest is to optimize our product, increase user experience, enhance
            our customer support, and improve our internal process efficiency.
          </Typography.Custom>
          <Typography.Custom className={'font-main text-[18.03px] font-bold leading-[32px] text-app-purple'}>
            Information we collect as customers use our service.
          </Typography.Custom>
          <Typography.Custom className={'font-main text-[18.03px] leading-[32px]'}>
            We may collect specific information about how customers use our product. This include situations such as how a customer uses a
            specific feature and when a customer uses the product. The information is collected as data logs, images, or a logical sequence
            of images/videos to reply an issue encountered by a user. Our logging system automatically collects information such as the
            internet protocol address, browser type, browser language, referring URL, features accessed, errors generated, time zone,
            geo-location data, operating system information, and other such information that is transmitted in the header of the user’s HTTP
            request. This information is stored in log files. We use these log files to analyze trends, administer, and improve the
            application. Our legal basis for the collection of user data is Art 6 (1) b) GDPR and Art. 6 (1) f) GDPR. Our legitimate
            interest is to optimize our product, increase user experience, enhance our customer support, and improve our internal process
            efficiency.
            <br /> Google user data <br />
            We use Google APIs for achieving the following:
          </Typography.Custom>

          <Typography.Custom className={'font-main text-[18.03px] leading-[32px]'}>
            1. Google OAuth APIs are used to perform a Single Sign On through Google, while doing so we ensure that the email provided by
            the Google Auth server is a valid user of the Yara system. <br />
            2. We use Google Drive APIs to retrieve file URLs and Ids of the files attached by the user into his/her Yara account. We also
            manage the permissions of these files through the drive APIs when the workflow on Yara attached to these files are in progress.
          </Typography.Custom>
        </div>
      </section>

      <WebsiteFooter />
    </div>
  )
}

export default Privacy
