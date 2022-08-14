import '../styles/global.scss'
import 'raf/polyfill'

import React from 'react'

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
