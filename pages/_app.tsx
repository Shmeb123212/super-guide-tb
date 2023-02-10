import type { AppProps } from 'next/app'
import './../styles/normalize.css'
import './../styles/global.css'
import { wrapper } from '@/redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  
      <Component {...pageProps} />
 
  )
}

export default wrapper.withRedux(MyApp)
