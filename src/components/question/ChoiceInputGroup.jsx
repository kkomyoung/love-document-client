import React from 'react'
import styled from 'styled-components'
import ExampleButton from './ExampleButton'

function Choice({ name, multiple, examples }) {
  return (
    <Box>
      {examples.map((example) => (
        <ExampleButton
          key={example.id}
          name={name}
          multiple={multiple}
          id={example.id}
          content={example.content}
        />
      ))}
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  flex-direction: column;

  button > label {
    width: 100%;
  }

  button + button {
    margin-top: 0.8rem;
  }
`

export default Choice
