import { SessionProvider } from 'next-auth/react'
import Layout from '../components/Layout/Layout'
import CartContextProvider from '../store/cart-context'
import NavContextProvider from '../store/nav-context'
import '../styles/globals.css'

function MyApp({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <CartContextProvider>
        <NavContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NavContextProvider>
      </CartContextProvider>
    </SessionProvider>
  )
}

export default MyApp
