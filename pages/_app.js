import '../styles/globals.css'
import {useEffect} from 'react'
import {themeChange} from 'theme-change'
import ThemeButton from '../components/ThemeButton'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    themeChange(false)
  })

  return(
  <>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
