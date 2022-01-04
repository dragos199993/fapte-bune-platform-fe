import '../styles/globals.css'
import { createContext, useState } from 'react';

const DarkProvider = createContext(null)

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <DarkProvider.Provider value={ [darkMode, setDarkMode] }>
      <Component { ...pageProps } />
    </DarkProvider.Provider>
  )
}

export default MyApp
