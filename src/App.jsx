import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'
import useMediaQuery from '@mui/material/useMediaQuery'

import SampleComponent from './components/SampleComponent'

function App() {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

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
      <SampleComponent />
    </ThemeProvider>
  )
}

export default App
