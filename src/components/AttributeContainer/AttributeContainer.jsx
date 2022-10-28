import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import PropTypes, { number, string } from 'prop-types'

import AttributeMember from './AttributeMember.jsx'
import AttributeName from './AttributeName.jsx'

AttributeContainer.propTypes = {
  groupId: number,
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

export default function AttributeContainer(props) {
  function addAttribute() {
    const groupMemberIds = props.groupMembers.map(
      (groupMember) => groupMember.memberId
    )
    const lastGroupMemberId = Math.max(...groupMemberIds)

    props.setAttributeGroups(
      props.attributeGroups.map((attributeGroup) =>
        attributeGroup.groupId === props.groupId
          ? {
              groupId: props.groupId,
              groupMembers: [
                ...props.groupMembers,
                {
                  memberId: lastGroupMemberId + 1,
                  memberName: '',
                  memberEmail: '',
                },
              ],
            }
          : attributeGroup
      )
    )
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
      <Grid xs={6}>
        <AttributeName />
        <Button variant={'outlined'} onClick={addAttribute}>
          メンバーの追加
        </Button>
      </Grid>
      <Grid container xs={12} id={'attribute-container'}>
        {props.groupMembers.map((groupMember) => {
          return (
            <AttributeMember
              key={groupMember.memberId}
              groupId={props.groupId}
              groupMembers={props.groupMembers}
              memberId={groupMember.memberId}
              memberName={groupMember.memberName}
              memberEmail={groupMember.memberEmail}
              attributeGroup={props.attributeGroup}
              attributeGroups={props.attributeGroups}
              setAttributeGroups={props.setAttributeGroups}
            />
          )
        })}
      </Grid>
    </Grid>
  )
}
