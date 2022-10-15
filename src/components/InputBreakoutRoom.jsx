import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export default function InputBreakoutRoom() {
  return (
    <Box
      sx={{
        mb: 3,
        p: 3,
        boxShadow: 1,
        borderRadius: 2,
      }}
    >
      <TextField
        label="ブレイクアウトルームの数"
        sx={{
          mb: 1,
        }}
        variant="outlined"
        type="number"
        fullWidth
      />
      <Button variant="contained" color="secondary">
        振り分け！
      </Button>
    </Box>
  )
}
