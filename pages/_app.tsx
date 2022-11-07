import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ActiveBreakPointIndicator } from '@components/global/dev/ActiveBreakPointIndicator'
import { WindowDimensionsIndicator } from '@components/global/dev/WindowDimensionsIndicator'
import { SWRConfig } from 'swr'
import { Toaster } from 'react-hot-toast'
import React from 'react'
import { defaultResponseProperties } from '@typed/global'
import RequestManager from '@utils/RequestManager'
import { Logger } from '@utils/Logger'
import { AuthenticationStore } from '@state/AuthState'

type resopnse = {
  data: {
    id: number
    fullName: string
    email: string
    phone: string
    photo: string
    coverPhoto: string
    location: string
    summary: string
    isEmailVerified: boolean
    isAnOrganization: boolean
    isPhoneVerified: boolean
  }
  meta: {
    accessToken: string
  }
} & defaultResponseProperties

function MyApp({ Component, pageProps }: AppProps) {
  const [updateLiu, updateAuthToken] = AuthenticationStore((state) => [state.updateLiu, state.updateAuthToken])

  React.useEffect(() => {
    ;(async () => {
      //if the user was still logged in last session
      //fetch refresh token
      const refreshTokenUrl = '/api/v1/auth/refresh-token'
      const request = RequestManager.makeRequest<resopnse>(refreshTokenUrl, 'post', undefined, { unAuthenticated: true })

      try {
        const response = await request

        //set user in state
        updateLiu({ ...response.data })

        //set token in state
        updateAuthToken(response.meta.accessToken)
        Logger('from authcheck', response)
      } catch (e) {
        Logger('error authcheck', e)
      }
    })()
  }, [updateAuthToken, updateLiu])

  return (
    <SWRConfig>
      {process.env.NODE_ENV === 'development' && <ActiveBreakPointIndicator />}
      {process.env.NODE_ENV === 'development' && <WindowDimensionsIndicator />}
      <Component {...pageProps} />

      {/*toast container*/}
      <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#5F04BA'
            },
            iconTheme: {
              primary: '#5F04BA',
              secondary: '#FFFAEE'
            }
          }
        }}
      />
    </SWRConfig>
  )
}

export default MyApp
