import type { NextPage } from 'next'
import { LayoutMaster } from '@components/global/layouts/LayoutMaster'
import { NewPasswordForm } from '@components/individual/auth/forms/NewPasswordForm'
import { AuthCheck } from '@components/global/AuthCheck'

const NewPassword: NextPage = () => {
  return (
    <AuthCheck isPublic>
      <LayoutMaster withNavbar={false}>
        <div className={'grid h-screen w-full place-items-center'}>
          <NewPasswordForm />
        </div>
      </LayoutMaster>
    </AuthCheck>
  )
}

export default NewPassword
