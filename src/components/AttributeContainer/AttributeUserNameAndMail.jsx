import Delete from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import PropTypes, { number, string } from 'prop-types'

AttributeUserNameAndMail.propTypes = {
  index: number,
  attributes: PropTypes.arrayOf(
    PropTypes.shape({ name: string, email: string })
  ),
  setAttributes: PropTypes.func,
}

export default function AttributeUserNameAndMail(props) {
  function deleteAttribute() {
    props.setAttributes(
      props.attributes.filter((attribute, index) => index !== props.index)
    )
  }

  return (
    <Grid xs={12} md={4}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 1,
        }}
      >
        <Typography>名前</Typography>
        <IconButton aria-label="delete" size="small" onClick={deleteAttribute}>
          <Delete fontSize="small" />
        </IconButton>
      </Box>
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
