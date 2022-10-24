import Container from '@mui/material/Container'

import AttributeContainer from './AttributeContainer.jsx'
import InputBreakoutRoom from './InputBreakoutRoom'

export default function MainContainer() {
  return (
    <Container sx={{ my: 4 }}>
      <InputBreakoutRoom />
      <AttributeContainer />
    </Container>
  )
}
