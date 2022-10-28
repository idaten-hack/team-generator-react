import { useState } from 'react'

import Container from '@mui/material/Container'

import AttributeContainer from './AttributeContainer/AttributeContainer.jsx'
import InputBreakoutRoom from './InputBreakoutRoom'

export default function MainContainer() {
  const [attributeGroups, setAttributeGroups] = useState([
    {
      groupId: 0,
      groupMembers: [{ memberId: 0, memberName: '', memberEmail: '' }],
    },
    {
      groupId: 1,
      groupMembers: [{ memberId: 0, memberName: '', memberEmail: '' }],
    },
  ])

  return (
    <Container sx={{ my: 4 }}>
      <InputBreakoutRoom />
      {attributeGroups.map((attributeGroup) => {
        return (
          <AttributeContainer
            key={attributeGroup.groupId}
            groupId={attributeGroup.groupId}
            groupMembers={attributeGroup.groupMembers}
            attributeGroup={attributeGroup}
            attributeGroups={attributeGroups}
            setAttributeGroups={setAttributeGroups}
          />
        )
      })}
    </Container>
  )
}
