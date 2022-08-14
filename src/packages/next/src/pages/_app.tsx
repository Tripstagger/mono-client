import '../styles/global.scss'
import 'raf/polyfill'

import { useStore } from '@tripstagger/app/state'
import React from 'react'
import { Provider } from 'react-redux'

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
