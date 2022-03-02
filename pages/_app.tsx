import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Default from '../components/Layouts/Default'
import { MainProvider } from '../context/MainContext'
import UserLayout from '../components/Layouts/User'

function MyApp({ Component, pageProps, router }: AppProps) {

    return (
        <MainProvider>
        {
            router.pathname.search('sign-in') == -1 && router.pathname.search('sign-up') == -1 ? (
                router.pathname.search('seller') == 1 || router.pathname.search('buyer') == 1 || router.pathname.search('user') == 1 ? (
                    <UserLayout>
                        <Component {...pageProps} />
                    </UserLayout>
                ) : (
                    <Default>
                        <Component {...pageProps} />
                    </Default>
                )
            ) : (
                <Component {...pageProps} />
            )
        }
        </MainProvider>
    )
}

export default MyApp
