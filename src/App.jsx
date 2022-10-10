import { CssBaseline, useMediaQuery } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

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
