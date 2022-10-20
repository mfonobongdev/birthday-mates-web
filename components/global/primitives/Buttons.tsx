import { Typography } from '@components/global/primitives/Typography'
import cx from 'clsx'
import facebookLogo from '/public/assets/icons/facebook.svg'
import googleLogo from '/public/assets/icons/google.svg'
import Image from 'next/image'

type ButtonsProps = JSX.IntrinsicElements['button']

export const Buttons = (): JSX.Element | null => {
  return null
}

const PrimaryTextButton = ({ children, className, disabled, onClick, type }: ButtonsProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type ? type : 'button'}
      className={cx(`w-full rounded-full p-5 ${className}`, {
        'bg-app-purple': !disabled,
        'bg-black/20': disabled
      })}>
      <Typography.Button className={'text-white'}>{children}</Typography.Button>
    </button>
  )
}

const SecondaryTextButton = ({ children, className, disabled, onClick, type }: ButtonsProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type ? type : 'button'}
      className={cx(`w-full rounded-[25.5692px] border py-2.5 px-5 ${className}`, {
        'border-app-purple': !disabled,
        'border-black/20': disabled
      })}>
      {/*{children}*/}
      <Typography.Input className={'text-app-purple'}>{children}</Typography.Input>
    </button>
  )
}

const FacebookButton = ({ className, disabled, onClick, type }: ButtonsProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type ? type : 'button'}
      className={cx(`w-full rounded-full px-5 py-2${className}`, {
        'bg-white': !disabled,
        'bg-black/20': disabled
      })}>
      <Typography.Button className={'text-white'}>
        <div className='relative h-6 w-full'>
          <Image className='object-contain object-center' src={facebookLogo} layout='fill' alt={'facebook logo'} />
        </div>
      </Typography.Button>
    </button>
  )
}

const GoogleButton = ({ className, disabled, onClick, type }: ButtonsProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type ? type : 'button'}
      className={cx(`w-full rounded-full px-5 py-2 ${className}`, {
        'bg-white': !disabled,
        'bg-black/20': disabled
      })}>
      <Typography.Button className={'text-white'}>
        <div className='relative h-6 w-full'>
          <Image className='object-contain object-center' src={googleLogo} layout='fill' alt={'google logo'} />
        </div>
      </Typography.Button>
    </button>
  )
}

Buttons.PrimaryTextButton = PrimaryTextButton
Buttons.SecondaryTextButton = SecondaryTextButton
Buttons.FacebookButton = FacebookButton
Buttons.GoogleButton = GoogleButton
