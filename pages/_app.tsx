import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Default from '../components/Layouts/Default'
import { MainProvider } from '../context/MainContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Default>
        <Component {...pageProps} />
      </Default>
    </MainProvider>
  )
}

export default MyApp
