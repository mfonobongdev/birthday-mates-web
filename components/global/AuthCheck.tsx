import React from 'react'
import { AuthenticationStore } from '@state/AuthState'
import { useRouter } from 'next/router'
import useHasMounted from '@utils/UseHasMounted'
import Image from 'next/image'
import { Buttons } from '@components/global/primitives/Buttons'

type AuthCheckProps = {
  children: React.ReactNode
  isPublic?: boolean
}

export const AuthCheck = ({ children, isPublic = false }: AuthCheckProps): JSX.Element | null => {
  //state
  const [liu, authToken, isLoggedIn] = AuthenticationStore((state) => [state.liu, state.authToken, state.isLoggedIn])
  const router = useRouter()

  const hasMounted = useHasMounted()

  if (!hasMounted) {
    return null
  }

  if (isPublic) {
    //check if user is logged in
    if (liu && liu.id && authToken && isLoggedIn) {
      return (
        <>
          <div className={'fixed top-20 right-5 z-50 grid grid-cols-1 place-items-center gap-3 rounded-md bg-gray-50 p-8 shadow'}>
            <div className={'font-main text-app-purple'}>You are already logged in</div>

            {/*profile picture*/}
            {liu.photo ? (
              <div className={'relative h-20 w-20 rounded-full border border-app-purple bg-gray-100/90'}>
                <div className={'absolute inset-0 rounded-full'}>
                  <Image className='rounded-full object-contain object-center' src={liu.photo} layout='fill' alt={'user profile picture'} />
                </div>
              </div>
            ) : (
              <div className={'grid h-16 w-16 place-items-center rounded-full bg-gray-100 text-xl font-bold uppercase'}>
                {liu.email.split('')[0]}
                {liu.email.split('')[1]}
              </div>
            )}

            <div>
              <Buttons.SecondaryTextButton className={'cursor-pointer'} onClick={() => router.push('/posts')}>
                Continue as {liu.email}
              </Buttons.SecondaryTextButton>
            </div>
          </div>
          <>{children}</>
        </>
      )
    }

    return <>{children}</>
  }

  if (!isPublic) {
    //check if user is logged in
    if (liu && liu.id && authToken && isLoggedIn) {
      return <>{children}</>
    }

    router.push('/login').then()
  }

  return <>{children}</>
}
