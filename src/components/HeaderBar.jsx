import Diversity3Icon from '@mui/icons-material/Diversity3'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function HeaderBar() {
  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Toolbar disableGutters>
          <Diversity3Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontWeight: 500,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            振り分けくん
          </Typography>

          <Diversity3Icon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: 'flex', md: 'none' },
              fontWeight: 500,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            振り分けくん
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
