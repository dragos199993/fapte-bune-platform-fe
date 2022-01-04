import { useEffect, useState } from 'react'

function useDarkMode() {
  const [theme, setTheme] = useState('dark')
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(localStorage.theme ? localStorage.theme : 'dark')
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove(colorTheme)
    root.classList.add(theme)

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
  }, [colorTheme, theme])

  return { colorTheme, setTheme }
}

export default useDarkMode
