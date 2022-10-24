import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'

export default function AttributeUserNameAndMail() {
  return (
    <Grid xs={12} md={4}>
      <Typography
        sx={{
          mb: 1,
        }}
      >
        名前
      </Typography>
      <TextField
        sx={{
          mb: 1,
        }}
        variant={'outlined'}
        fullWidth
        size={'small'}
      />
      <Typography
        sx={{
          mb: 1,
        }}
      >
        メールアドレス
      </Typography>
      <TextField variant={'outlined'} fullWidth size={'small'} />
    </Grid>
  )
}
