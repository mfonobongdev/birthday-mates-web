import type { NextPage } from 'next'
import { LayoutMaster } from '@components/global/layouts/LayoutMaster'
import { NewPasswordForm } from '@components/individual/auth/forms/NewPasswordForm'

const NewPassword: NextPage = () => {
  return (
    <LayoutMaster withNavbar={false}>
      <div className={'grid h-screen w-full place-items-center'}>
        <NewPasswordForm />
      </div>
    </LayoutMaster>
  )
}

export default NewPassword
