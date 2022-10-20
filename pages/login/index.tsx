import type { NextPage } from 'next'
import { LayoutMaster } from '@components/global/layouts/LayoutMaster'
import { LoginForm } from '@components/individual/auth/forms/LoginForm'

const LoginHome: NextPage = () => {
  return (
    <LayoutMaster withNavbar={false}>
      <div className={'grid h-screen w-full place-items-center'}>
        <LoginForm />
      </div>
    </LayoutMaster>
  )
}

export default LoginHome
