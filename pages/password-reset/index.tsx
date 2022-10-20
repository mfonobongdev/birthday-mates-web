import type { NextPage } from 'next'
import { LayoutMaster } from '@components/global/layouts/LayoutMaster'
import { PasswordResetForm } from '@components/individual/auth/forms/PasswordResetForm'

const PasswordResetHome: NextPage = () => {
  return (
    <LayoutMaster withNavbar={false}>
      <div className={'grid h-screen w-full place-items-center'}>
        <PasswordResetForm />
      </div>
    </LayoutMaster>
  )
}

export default PasswordResetHome
