import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline, useMediaQuery, Typography } from '@mui/material'
import { SampleComponent } from './components/SampleComponent'

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
      <Typography>Almost before we knew it, we had left the ground.</Typography>
      <Typography>
        人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは
      </Typography>
    </ThemeProvider>
  )
}

export default App
