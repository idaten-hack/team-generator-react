import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export default function SampleComponent() {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2 }}
      sx={{ m: 2, p: 2 }}
    >
      <Button variant="contained" color="primary">
        primary
      </Button>
      <Button variant="contained" color="secondary">
        secondary
      </Button>
      <Button variant="contained" color="warning">
        warning
      </Button>
      <Button variant="contained" color="info">
        info
      </Button>
      <Button variant="contained" color="success">
        success
      </Button>
    </Stack>
  )
}
