import React from 'react'
import styled from 'styled-components'
import ExampleButton from './ExampleButton'

function YesOrNo({ name, positiveLabel, negativeLabel }) {
  return (
    <StyledBox>
      <ExampleButton name={name} id={negativeLabel} content={negativeLabel} />
      <ExampleButton name={name} id={positiveLabel} content={positiveLabel} />
    </StyledBox>
  )
}

const StyledBox = styled.ul`
  display: flex;

  li {
    flex: 1;
  }

  li > label {
    width: 100%;
  }

  li + li {
    margin-left: 0.8rem;
  }
`

export default YesOrNo
