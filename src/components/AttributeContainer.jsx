import Grid from '@mui/material/Unstable_Grid2'

import AttributeName from './AttributeName.jsx'
import AttributeUserNameAndMail from './AttributeUserNameAndMail.jsx'

export default function AttributeContainer() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        mb: 3,
        p: 2,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'gray.50',
      }}
    >
      <Grid xs={12}>
        <AttributeName />
      </Grid>
      <Grid xs={12} md={4}>
        <AttributeUserNameAndMail />
      </Grid>
    </Grid>
  )
}
