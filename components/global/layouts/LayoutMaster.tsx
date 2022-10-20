import Image from 'next/image'
import appBackground from '/public/assets/background.png'
import { Typography } from '@components/global/primitives/Typography'

type LayoutProps = { withNavbar?: boolean } & JSX.IntrinsicElements['main']

export const LayoutMaster = ({ withNavbar = true, children }: LayoutProps): JSX.Element => {
  return (
    <main>
      {/*background*/}
      <div className={'fixed inset-0 -z-50'}>
        <Image className='object-cover object-center' src={appBackground} layout='fill' alt={'three circles with different colors'} />
      </div>

      {/*navigation bar || title section*/}

      {withNavbar ? (
        <div>TODO: Navbar</div>
      ) : (
        <div className={'container'}>
          <Typography.Logo className={'relative top-10 left-0 -z-10 max-w-max text-logo-purple'}>Birthday Mates</Typography.Logo>
        </div>
      )}

      <section className={'container'}>{children}</section>
    </main>
  )
}
