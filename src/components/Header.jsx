import { Diversity3 } from '@mui/icons-material'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'

export default function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Diversity3 sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 500,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            振り分けくん
          </Typography>
          <Diversity3 sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
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
