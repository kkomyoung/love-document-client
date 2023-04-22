import React from 'react'
import styled from 'styled-components'
import ExampleButton from './ExampleButton'

function ChoiceInputGroup({ questionId, questionType, multiple, examples }) {
  return (
    <Box>
      {examples.map((example) => (
        <ExampleButton
          key={example.id}
          exampleId={example.id}
          name={`${questionType}#${questionId}`}
          multiple={multiple}
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

export default ChoiceInputGroup
