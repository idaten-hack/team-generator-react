import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Unstable_Grid2'
import PropTypes, { number } from 'prop-types'

InputBreakoutRoom.propTypes = {
  breakoutRoomNum: number,
  setBreakoutRoomNum: PropTypes.func,
}

export default function InputBreakoutRoom(props) {
  const handleBreakoutRoomNumChange = (event) => {
    props.setBreakoutRoomNum(Number(event.target.value))
  }

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
        <TextField
          label="ブレイクアウトルームの数"
          variant="outlined"
          type="number"
          fullWidth
          value={props.breakoutRoomNum}
          onChange={handleBreakoutRoomNumChange}
        />
      </Grid>
      <Grid xs={12}>
        <Button variant="contained" color="secondary">
          振り分け！
        </Button>
      </Grid>
    </Grid>
  )
}
