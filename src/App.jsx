import { useState } from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'
import useMediaQuery from '@mui/material/useMediaQuery'

import HeaderBar from './components/HeaderBar'
import MainContainer from './components/MainContainer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    useMediaQuery('(prefers-color-scheme: dark)')
  )

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: [
        'Roboto',
        'Noto Sans JP',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <MainContainer />
    </ThemeProvider>
  )
}

export default App
