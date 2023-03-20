import React from 'react'
import styled from 'styled-components'
import ExampleButton from './ExampleButton'

function MultipleChoice({ name, isMultiChoice, examples }) {
  return (
    <StyledBox>
      {examples.map((example) => (
        <ExampleButton
          key={example.id}
          name={name}
          isMultiChoice={isMultiChoice}
          id={example.id}
          text={example.text}
        />
      ))}
    </StyledBox>
  )
}

const StyledBox = styled.ul`
  display: flex;
  flex-direction: column;

  li > label {
    width: 100%;
  }

  li + li {
    margin-top: 0.8rem;
  }
`

export default MultipleChoice
