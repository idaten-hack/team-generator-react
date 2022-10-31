import Delete from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import PropTypes, { number, string } from 'prop-types'

AttributeMember.propTypes = {
  groupId: number,
  groupName: string,
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
    groupName: string,
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
      groupName: string,
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
  const deleteAttribute = () => {
    const deletedGroupMembers =
      props.groupMembers.length === 1
        ? [{ memberId: props.memberId, memberName: '', memberEmail: '' }]
        : props.groupMembers.filter(
            (groupMember) => groupMember.memberId !== props.memberId
          )

    props.setAttributeGroups(
      props.attributeGroups.map((attributeGroup) =>
        attributeGroup.groupId === props.groupId
          ? {
              groupId: props.groupId,
              groupName: props.groupName,
              groupMembers: deletedGroupMembers,
            }
          : attributeGroup
      )
    )
  }

  const handleTextFieldChange = (event, target) => {
    const changedMembers = props.groupMembers.map((groupMember) =>
      groupMember.memberId === props.memberId
        ? {
            memberId: props.memberId,
            memberName:
              target === 'name' ? event.target.value : props.memberName,
            memberEmail:
              target === 'email' ? event.target.value : props.memberEmail,
          }
        : groupMember
    )

    props.setAttributeGroups(
      props.attributeGroups.map((attributeGroup) =>
        attributeGroup.groupId === props.groupId
          ? {
              groupId: props.groupId,
              groupMembers: changedMembers,
            }
          : attributeGroup
      )
    )
  }

  return (
    <Grid xs={12} sm={6} md={4}>
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
        value={props.memberName}
        onChange={(event) => handleTextFieldChange(event, 'name')}
      />
      <Typography
        sx={{
          mb: 1,
        }}
      >
        メールアドレス
      </Typography>
      <TextField
        variant={'outlined'}
        fullWidth
        size={'small'}
        value={props.memberEmail}
        onChange={(event) => handleTextFieldChange(event, 'email')}
      />
    </Grid>
  )
}
