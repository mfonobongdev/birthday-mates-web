import Image from 'next/image'
import appBackground from '/public/assets/background.png'
import { Typography } from '@components/global/primitives/Typography'
import Link from 'next/link'

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
        <div className={'container fixed top-0 left-0 right-0 z-50 py-10'}>
          <Link href='/'>
            <a>
              <Typography.Logo className={'max-w-max text-logo-purple'}>Birthday Mates</Typography.Logo>
            </a>
          </Link>
        </div>
      )}

      <section className={'container'}>{children}</section>
    </main>
  )
}
