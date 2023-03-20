import React from 'react'
import styled from 'styled-components'
import ExampleButton from './ExampleButton'

function YesOrNo({ name, examples }) {
  return (
    <StyledBox>
      {examples.map((example) => (
        <ExampleButton
          key={example.id}
          name={name}
          isMultiChoice={false}
          id={example.id}
          text={example.text}
        />
      ))}
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
