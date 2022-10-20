import type { NextPage } from 'next'
import { LayoutMaster } from '@components/global/layouts/LayoutMaster'
import { CreateAccountForm } from '@components/individual/auth/forms/CreateAccountForm'

const RegistrationHome: NextPage = () => {
  return (
    <LayoutMaster withNavbar={false}>
      <div className={'grid h-screen w-full place-items-center'}>
        <CreateAccountForm />
      </div>
    </LayoutMaster>
  )
}

export default RegistrationHome
