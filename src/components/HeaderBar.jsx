import Diversity3Icon from '@mui/icons-material/Diversity3'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

HeaderBar.propTypes = {
  isDarkMode: PropTypes.bool,
  setIsDarkMode: PropTypes.func,
}

export default function HeaderBar(/*props*/) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Diversity3Icon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/team-generator-react/"
              sx={{
                fontWeight: 500,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              振り分けくん
            </Typography>
          </Box>
          {/*<Box>
            <ToggleAppearanceMode
              isDarkMode={props.isDarkMode}
              setIsDarkMode={props.setIsDarkMode}
            />
          </Box>*/}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
