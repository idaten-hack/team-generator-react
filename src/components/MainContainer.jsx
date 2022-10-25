import { useState } from 'react'

import Container from '@mui/material/Container'

import AttributeContainer from './AttributeContainer.jsx'
import InputBreakoutRoom from './InputBreakoutRoom'

export default function MainContainer() {
  const [attributes, setAttributes] = useState([{ name: '', email: '' }])

  return (
    <Container sx={{ my: 4 }}>
      <InputBreakoutRoom />
      <AttributeContainer
        attributes={attributes}
        setAttributes={setAttributes}
      />
    </Container>
  )
}
