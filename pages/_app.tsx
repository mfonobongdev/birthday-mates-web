import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ActiveBreakPointIndicator } from '@components/global/dev/ActiveBreakPointIndicator'
import { WindowDimensionsIndicator } from '@components/global/dev/WindowDimensionsIndicator'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NODE_ENV === 'development' && <ActiveBreakPointIndicator />}
      {process.env.NODE_ENV === 'development' && <WindowDimensionsIndicator />}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
