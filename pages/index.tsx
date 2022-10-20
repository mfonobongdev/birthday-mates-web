import type { NextPage } from 'next'
import Image from 'next/image'
import appBackground from '/public/assets/background.png'
import heroImage from '/public/assets/hero-image.png'
import imageOne from '/public/assets/image-1.png'
import imageTwo from '/public/assets/image-2.png'
import imageThree from '/public/assets/image-3.png'
import imageFour from '/public/assets/image-4.png'
import { WebsiteNavBar } from '@components/global/layouts/WebsiteNavBar'
import { Typography } from '@components/global/primitives/Typography'
import { GlobalIcons } from '@components/global/icons/GlobalIcons'
import { Buttons } from '@components/global/primitives/Buttons'
import React from 'react'
import { WebsiteFooter } from '@components/global/layouts/WebsiteFooter'

const Home: NextPage = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }
  return (
    <main>
      {/*hero section*/}
      <section className={'relative grid grid-cols-1 grid-rows-[max-content_max-content]'}>
        {/*background*/}
        <div className={'absolute inset-0 -z-50'}>
          <Image className='object-cover' src={appBackground} layout='fill' alt={'three circles with different colors'} />
        </div>

        {/*navbar*/}
        <WebsiteNavBar />

        {/*hero  content*/}
        <div className={'container grid h-[900px] grid-cols-2 grid-rows-1 place-items-center'}>
          <div className={'space-y-10 justify-self-start'}>
            {/*heading*/}
            <div>
              <Typography.Custom className={'font-main text-[31.3876px] font-bold uppercase leading-[32px] text-app-purple'}>
                Connect with
              </Typography.Custom>
              <Typography.Custom
                className={'mt-3 text-right font-main text-[31.3876px] font-bold uppercase leading-[20px] text-app-purple'}>
                Birthday mates
              </Typography.Custom>
              <Typography.Custom className={'mt-8 font-main text-[58px] font-bold uppercase leading-[30px] text-app-purple'}>
                Worldwide
              </Typography.Custom>
            </div>

            {/*summary*/}
            <div className={'max-w-[387px]'}>
              <Typography.Custom className={'font-main text-[17px] leading-[18px]'}>
                Birthday mates allows you to celebrate with birthday mates from every part of the world. Come join the birthday community.
              </Typography.Custom>
            </div>

            {/*download buttons*/}
            {/*TODO: add link to respective stores*/}
            <div className={'flex space-x-4'}>
              <a href={'#'}>
                <GlobalIcons.AppleAppStoreButton />
              </a>
              <a href={'#'}>
                <GlobalIcons.GooglePlayStoreButton />
              </a>
            </div>
          </div>

          {/*hero image*/}
          <div className={'h-full w-full'}>
            <div className={'relative h-full w-full'}>
              <div className={'absolute inset-0'}>
                <Image className='object-contain object-bottom' src={heroImage} layout='fill' alt={'Birthday mates app on iPhone'} />
              </div>
            </div>
          </div>
        </div>

        {/*icon*/}
        <div className={'absolute bottom-20 left-0 right-0 grid place-items-center'}>
          <GlobalIcons.CircledArrowDown className={'h-[42px] w-[42px]'} />
        </div>
      </section>

      {/*find and connect section*/}
      <section className={'relative grid grid-cols-1 grid-rows-[max-content_max-content] bg-white'}>
        {/*hero  content*/}
        <div className={'container grid h-[900px] grid-cols-2 grid-rows-1 place-items-center'}>
          <div className={'space-y-10 justify-self-start'}>
            {/*description*/}
            <div className={'max-w-[387px]'}>
              <Typography.Custom className={'font-main text-[24px] font-semibold leading-[26px] text-app-purple'}>
                FInd and connect with birthday and month mates from all around the world
              </Typography.Custom>
            </div>

            {/*download buttons*/}
            {/*TODO: add link to respective stores*/}
            <div>
              <Buttons.PrimaryTextButton className={'max-w-max px-[47px]'}>
                <Typography.Custom className={'font-main text-[19.2px] font-semibold leading-[20px]'}>Explore</Typography.Custom>
              </Buttons.PrimaryTextButton>
            </div>
          </div>

          {/*image*/}
          <div className={'grid h-full w-full place-items-center'}>
            <div className={'relative h-[533px] w-full'}>
              <div className={'absolute inset-0'}>
                <Image className='object-contain object-bottom' src={imageOne} layout='fill' alt={'Birthday mates app on iPhone'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*join the community section*/}
      <section className={'relative'}>
        {/*background*/}
        <div className={'absolute inset-0 -z-50'}>
          <Image className='object-cover' src={imageTwo} layout='fill' alt={'user holding phone using birthday mates app'} />
        </div>

        {/*empty*/}
        <div className={'container grid grid-cols-[max-content_max-content] grid-rows-1'}>
          <div className={'grid h-[688px] grid-cols-2 grid-rows-1 place-items-center'}>
            <div className={'space-y-10 justify-self-start'}>{''}</div>

            {/*content*/}
            <div className={'space-y-10 justify-self-end'}>
              {/*description*/}
              <div className={'max-w-[545px]'}>
                <Typography.Custom className={'font-main text-[54px] font-bold uppercase leading-[55px] text-white'}>
                  Connect with birthday mates around the world
                </Typography.Custom>
              </div>

              {/*download buttons*/}
              {/*TODO: add link to respective stores*/}
              <div>
                <button className={'w-full max-w-max rounded-full bg-white p-5'}>
                  <Typography.Custom className={'px-[40px] font-main text-[18px] font-semibold uppercase leading-[18px] text-app-purple'}>
                    Join the community
                  </Typography.Custom>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*features section*/}
      <section className={'relative grid grid-cols-1 grid-rows-[max-content_max-content] py-[120px]'}>
        {/*background*/}
        <div className={'absolute inset-0 -z-50'}>
          <Image className='object-cover' src={appBackground} layout='fill' alt={'three circles with different colors'} />
        </div>

        {/*hero  content*/}
        <div className={'container grid h-[900px] grid-cols-1 grid-rows-[max-content_1fr] place-items-center gap-10'}>
          {/*cards*/}
          <div className={'grid grid-cols-[max-content_max-content_max-content] grid-rows-1 gap-5'}>
            <GlobalIcons.PostCard />
            <GlobalIcons.ChatCard />
            <GlobalIcons.InteractCard />
          </div>

          {/*image*/}
          <div className={'h-full w-full'}>
            <div className={'relative h-full w-full'}>
              <div className={'absolute inset-0'}>
                <Image className='object-contain object-bottom' src={imageThree} layout='fill' alt={'Birthday mates app on iPhone'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*find and connect section flipped*/}
      <section className={'relative grid grid-cols-1 grid-rows-[max-content_max-content] bg-white'}>
        {/*hero  content*/}
        <div className={'container grid h-[900px] grid-cols-2 grid-rows-1 place-items-center'}>
          {/*image*/}
          <div className={'grid h-full w-full place-items-center'}>
            <div className={'relative h-[533px] w-full'}>
              <div className={'absolute inset-0'}>
                <Image className='object-contain object-bottom' src={imageFour} layout='fill' alt={'Birthday mates app on iPhone'} />
              </div>
            </div>
          </div>

          <div className={'space-y-10 justify-self-end'}>
            {/*description*/}
            <div className={'max-w-[387px]'}>
              <Typography.Custom className={'font-main text-[24px] font-semibold leading-[26px] text-app-purple'}>
                FInd and connect with birthday and month mates from all around the world
              </Typography.Custom>
            </div>

            {/*download buttons*/}
            {/*TODO: add link to respective stores*/}
            <div>
              <Buttons.PrimaryTextButton className={'max-w-max px-[47px]'}>
                <Typography.Custom className={'font-main text-[19.2px] font-semibold leading-[20px]'}>Explore</Typography.Custom>
              </Buttons.PrimaryTextButton>
            </div>
          </div>
        </div>
      </section>

      {/*download section*/}
      <section className={'bg-[#FAFAFA] py-[180px]'}>
        <div className={'container grid grid-cols-1 grid-rows-[max-content_max-content] place-items-center gap-10'}>
          <Typography.Custom className={'text-[36px] font-semibold leading-[37px] text-app-purple'}>
            Download for Android/iOS
          </Typography.Custom>

          {/*download buttons*/}
          {/*TODO: add link to respective stores*/}
          <div className={'flex space-x-4'}>
            <a href={'#'}>
              <GlobalIcons.AppleAppStoreButton />
            </a>
            <a href={'#'}>
              <GlobalIcons.GooglePlayStoreButton />
            </a>
          </div>
        </div>
      </section>

      {/*footer*/}
      <WebsiteFooter />
    </main>
  )
}

export default Home
