import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function AttributeName() {
  return (
    <Box
      sx={{
        mb: 2,
      }}
    >
      <Typography
        sx={{
          mb: 1,
        }}
      >
        属性名
      </Typography>
      <TextField variant={'outlined'} fullWidth size={'small'} />
    </Box>
  )
}
