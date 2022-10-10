import Diversity3Icon from '@mui/icons-material/Diversity3'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

import ToggleAppearanceMode from './ToggleAppearanceMode'

HeaderBar.propTypes = {
  isDarkMode: PropTypes.bool,
  setIsDarkMode: PropTypes.func,
}

export default function HeaderBar(props) {
  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-start' },
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
          <ToggleAppearanceMode
            isDarkMode={props.isDarkMode}
            setIsDarkMode={props.setIsDarkMode}
          />

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
