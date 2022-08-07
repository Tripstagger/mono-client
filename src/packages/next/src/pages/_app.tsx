import '../styles/global.scss'

import 'raf/polyfill'

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
