import store from '@/redux/store'
import { SessionProvider } from "next-auth/react"
import '@/styles/globals.css'
import { Provider } from 'react-redux' 

export default function App({ Component, pageProps }) {
  const layout = Component.getLayout || ((page) => page)
  return <SessionProvider session={Component.session}>
    <Provider store={store}>
      {layout(<Component  {...pageProps} />)}
    </Provider>
  </SessionProvider>
}
