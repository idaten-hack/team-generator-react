import Container from '@mui/material/Container'

import InputBreakoutRoom from './InputBreakoutRoom'

export default function MainContainer() {
  return (
    <Container
      sx={{
        my: 3,
      }}
    >
      <InputBreakoutRoom />
    </Container>
  )
}
