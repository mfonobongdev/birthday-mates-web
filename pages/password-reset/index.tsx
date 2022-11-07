import type { NextPage } from 'next'
import { LayoutMaster } from '@components/global/layouts/LayoutMaster'
import { PasswordResetForm } from '@components/individual/auth/forms/PasswordResetForm'
import { AuthCheck } from '@components/global/AuthCheck'

const PasswordResetHome: NextPage = () => {
  return (
    <AuthCheck isPublic>
      <LayoutMaster withNavbar={false}>
        <div className={'grid h-screen w-full place-items-center'}>
          <PasswordResetForm />
        </div>
      </LayoutMaster>
    </AuthCheck>
  )
}

export default PasswordResetHome
