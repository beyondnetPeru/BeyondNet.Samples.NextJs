import { Global } from '@emotion/react'
import { AppProps } from 'next/app'
import { globalStyles } from '../shared/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
