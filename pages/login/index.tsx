import type { NextPage } from 'next'
import { LayoutMaster } from '@components/global/layouts/LayoutMaster'
import { LoginForm } from '@components/individual/auth/forms/LoginForm'
import { AuthCheck } from '@components/global/AuthCheck'

const LoginHome: NextPage = () => {
  return (
    <AuthCheck isPublic>
      <LayoutMaster withNavbar={false}>
        <div className={'grid h-screen w-full place-items-center'}>
          <LoginForm />
        </div>
      </LayoutMaster>
    </AuthCheck>
  )
}

export default LoginHome
