import 'simpledotcss/simple.min.css'

import type {AppProps} from 'next/app'

// noinspection JSUnusedGlobalSymbols
export default function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}
