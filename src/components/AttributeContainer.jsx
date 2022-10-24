import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import PropTypes, { string } from 'prop-types'

import AttributeName from './AttributeName.jsx'
import AttributeUserNameAndMail from './AttributeUserNameAndMail.jsx'

AttributeContainer.propTypes = {
  attributes: PropTypes.arrayOf(
    PropTypes.shape({ name: string, email: string })
  ),
  setAttributes: PropTypes.func,
}

export default function AttributeContainer(props) {
  function addAttribute() {
    props.setAttributes([
      ...props.attributes,
      {
        name: '',
        email: '',
      },
    ])
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
          属性の追加
        </Button>
      </Grid>
      <Grid container xs={12} id={'attribute-container'}>
        {props.attributes.map((attribute, index) => {
          return (
            <AttributeUserNameAndMail
              key={index}
              index={index}
              attributes={props.attributes}
              setAttributes={props.setAttributes}
            />
          )
        })}
      </Grid>
    </Grid>
  )
}
