import type { NextPage } from 'next'
import { LayoutMaster } from '@components/global/layouts/LayoutMaster'
import { PasswordResetVerifyCodeForm } from '@components/individual/auth/forms/PasswordResetVerifyCodeForm'
import { AuthCheck } from '@components/global/AuthCheck'

const PasswordResetVerifyCode: NextPage = () => {
  return (
    <AuthCheck isPublic>
      <LayoutMaster withNavbar={false}>
        <div className={'grid h-screen w-full place-items-center'}>
          <PasswordResetVerifyCodeForm />
        </div>
      </LayoutMaster>
    </AuthCheck>
  )
}

export default PasswordResetVerifyCode
