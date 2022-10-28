import Delete from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import PropTypes, { number, string } from 'prop-types'

AttributeMember.propTypes = {
  groupId: number,
  memberId: number,
  memberName: string,
  memberEmail: string,
  groupMembers: PropTypes.arrayOf(
    PropTypes.shape({
      memberId: number,
      memberName: string,
      memberEmail: string,
    })
  ),
  attributeGroup: PropTypes.shape({
    groupId: number,
    groupMembers: PropTypes.arrayOf(
      PropTypes.shape({
        memberId: number,
        memberName: string,
        memberEmail: string,
      })
    ),
  }),
  attributeGroups: PropTypes.arrayOf(
    PropTypes.shape({
      groupId: number,
      groupMembers: PropTypes.arrayOf(
        PropTypes.shape({
          memberId: number,
          memberName: string,
          memberEmail: string,
        })
      ),
    })
  ),
  setAttributeGroups: PropTypes.func,
}

export default function AttributeMember(props) {
  function deleteAttribute() {
    props.setAttributeGroups(
      props.attributeGroups.map((attributeGroup) =>
        attributeGroup.groupId === props.groupId
          ? {
              groupId: props.groupId,
              groupMembers: props.groupMembers.filter(
                (groupMember) => groupMember.memberId !== props.memberId
              ),
            }
          : attributeGroup
      )
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
        {props.groupMembers.length !== 1 ? (
          <IconButton
            aria-label="delete"
            size="small"
            onClick={deleteAttribute}
          >
            <Delete fontSize="small" />
          </IconButton>
        ) : (
          <></>
        )}
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
