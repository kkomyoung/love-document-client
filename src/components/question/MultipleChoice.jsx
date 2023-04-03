import React from 'react'
import styled from 'styled-components'
import ExampleButton from './ExampleButton'

function MultipleChoice({ name, multiple, examples }) {
  return (
    <StyledBox>
      {examples.map((example) => (
        <ExampleButton
          key={example.id}
          name={name}
          multiple={multiple}
          id={example.id}
          content={example.content}
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
