import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function AttributeUserNameAndMail() {
  return (
    <>
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
    </>
  )
}
