import type { NextPage } from 'next'
import { LayoutMaster } from '@components/global/layouts/LayoutMaster'
import { PasswordResetVerifyCodeForm } from '@components/individual/auth/forms/PasswordResetVerifyCodeForm'

const PasswordResetVerifyCode: NextPage = () => {
  return (
    <LayoutMaster withNavbar={false}>
      <div className={'grid h-screen w-full place-items-center'}>
        <PasswordResetVerifyCodeForm />
      </div>
    </LayoutMaster>
  )
}

export default PasswordResetVerifyCode
