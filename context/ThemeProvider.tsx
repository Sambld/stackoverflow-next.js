'use client'

import React, {createContext, useContext, useEffect} from 'react'

type ThemeContextType = {
  theme: string
  setTheme: (theme: string) => void

}

export const ThemeContext = createContext<ThemeContextType | undefined>({
  theme: 'light',
  setTheme: () => null
})

const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
  const [theme, setTheme] = React.useState('')
  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    }
    if (theme === 'dark') {
      setTheme('light')
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }
  useEffect(() => {
    handleThemeChange()
  }, [theme])
  const value = { theme, setTheme }
  return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
