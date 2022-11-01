import { useState } from 'react'

import Container from '@mui/material/Container'

import AttributeContainer from './AttributeContainer/AttributeContainer.jsx'
import InputBreakoutRoomNum from './InputBreakoutRoomNum.jsx'

export default function MainContainer() {
  const [breakoutRoomNum, setBreakoutRoomNum] = useState(1)
  const [attributeGroups, setAttributeGroups] = useState([
    {
      groupId: 0,
      groupName: '',
      groupMembers: [{ memberId: 0, memberName: '', memberEmail: '' }],
    },
  ])

  return (
    <Container sx={{ my: 4 }}>
      <InputBreakoutRoomNum
        breakoutRoomNum={breakoutRoomNum}
        setBreakoutRoomNum={setBreakoutRoomNum}
      />
      {attributeGroups.map((attributeGroup) => {
        return (
          <AttributeContainer
            key={attributeGroup.groupId}
            groupId={attributeGroup.groupId}
            groupName={attributeGroup.groupName}
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
