import { NextPage } from 'next'
import { WebsiteNavBar } from '@components/global/layouts/WebsiteNavBar'
import { WebsiteNavValuesEnum } from '@state/NavigationState'
import { WebsiteFooter } from '@components/global/layouts/WebsiteFooter'
import Image from 'next/image'
import appBackground from '/public/assets/background.png'
import { Typography } from '@components/global/primitives/Typography'
import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { Buttons } from '@components/global/primitives/Buttons'
import { AuthCheck } from '@components/global/AuthCheck'

const Help: NextPage = () => {
  //FAQ Questions
  const questions = [
    {
      question: 'Can I make a post on my desktop?',
      answer: 'No, you can’t make a post on a desktop or laptop. Posts can only be made from your mobile phone'
    },
    {
      question: 'Can I make a post on my desktop?',
      answer: 'No, you can’t make a post on a desktop or laptop. Posts can only be made from your mobile phone'
    },
    {
      question: 'Can I make a post on my desktop?',
      answer: 'No, you can’t make a post on a desktop or laptop. Posts can only be made from your mobile phone'
    }
  ]

  return (
    <AuthCheck isPublic>
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

            {/*questions*/}
            <Accordion.Root type='single' defaultValue='item-1' collapsible className={'w-full'}>
              {questions.map((question, index) => (
                <Accordion.Item key={index + 1} value={`item-${index + 1}`} className={'w-full border-b-2 border-app-purple'}>
                  <Accordion.Trigger className={'flex w-full items-center justify-between rounded-sm py-6 px-2 hover:bg-gray-100/50'}>
                    <Typography.Custom className={'font-main text-[17px] font-normal'}>{question.question}</Typography.Custom>
                    <ChevronIcon />
                  </Accordion.Trigger>

                  <Accordion.Content>
                    <Typography.Custom className={'my-5 ml-20 max-w-[80ch] font-main text-[17px] font-normal text-app-purple'}>
                      {question.answer}
                    </Typography.Custom>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>

          {/*send us a message*/}
          <div className={'py-20'}>
            <Typography.Custom className={'mb-[50px] text-center font-main text-[24px] font-bold uppercase text-app-purple'}>
              send us a message
            </Typography.Custom>
            <textarea
              className={'mb-[16px] w-full rounded-[8px] bg-[#FAFAFA] p-5  placeholder:font-main'}
              rows={6}
              placeholder={'Message here...'}
            />
            <input
              className={'mb-[40px] w-full rounded-[8px] bg-[#FAFAFA] p-5  placeholder:font-main'}
              placeholder={'Your email address'}
              type={'email'}
            />

            <div className={'grid w-full place-items-center'}>
              <Buttons.PrimaryTextButton className={'mb-[40px] w-[200px] uppercase'} type={'submit'}>
                Send message
              </Buttons.PrimaryTextButton>
            </div>

            <Typography.Subhead className={'mb-[20px] text-center text-app-purple'}>
              We would get back to you as soon as possible.
            </Typography.Subhead>
          </div>
        </section>

        <WebsiteFooter />
      </div>
    </AuthCheck>
  )
}

export default Help

const ChevronIcon = (): JSX.Element => {
  return (
    <svg width='19' height='10' viewBox='0 0 19 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1.95867 0.367663C1.54472 -0.0568926 0.864972 -0.0654889 0.440416 0.348462C0.0158613 0.762413 0.00726497 1.44216 0.421216 1.86671L1.95867 0.367663ZM17.7041 1.86819C18.1189 1.44443 18.1116 0.76467 17.6878 0.349904C17.2641 -0.0648624 16.5843 -0.0575721 16.1695 0.366187L17.7041 1.86819ZM10.0733 8.12956L9.30598 7.37856L10.0733 8.12956ZM0.421216 1.86671L7.25652 8.87712L8.79397 7.37807L1.95867 0.367663L0.421216 1.86671ZM10.8405 8.88056L17.7041 1.86819L16.1695 0.366187L9.30598 7.37856L10.8405 8.88056ZM7.25652 8.87712C8.23841 9.88416 9.85673 9.88571 10.8405 8.88056L9.30598 7.37856C9.16543 7.52215 8.93425 7.52193 8.79397 7.37807L7.25652 8.87712Z'
        fill='#5F04BA'
      />
    </svg>
  )
}
