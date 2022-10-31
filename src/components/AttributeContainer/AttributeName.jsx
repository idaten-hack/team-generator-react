import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import PropTypes, { number, string } from 'prop-types'

AttributeName.propTypes = {
  groupId: number,
  groupName: string,
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

export default function AttributeName(props) {
  const handleAttributeNameChange = (event) => {
    props.setAttributeGroups(
      props.attributeGroups.map((attributeGroup) =>
        attributeGroup.groupId === props.groupId
          ? {
              groupId: props.groupId,
              groupName: event.target.value,
              groupMembers: attributeGroup.groupMembers,
            }
          : attributeGroup
      )
    )
  }

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
      <TextField
        variant={'outlined'}
        fullWidth
        size={'small'}
        value={props.groupName}
        onChange={handleAttributeNameChange}
      />
    </Box>
  )
}
