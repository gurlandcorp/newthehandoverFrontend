import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Default from '../components/Layouts/Default'
import { MainProvider } from '../context/MainContext'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps, router }: AppProps) {

    return (
        <MainProvider>
        {
            router.pathname.search('sign-in') == -1 ? (
                <Default>
                    <Component {...pageProps} />
                </Default>
            ) : (
                <Component {...pageProps} />
            )
        }
        </MainProvider>
    )
}

export default MyApp
