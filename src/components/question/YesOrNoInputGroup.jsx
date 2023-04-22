import React from 'react'
import styled from 'styled-components'
import ExampleButton from './ExampleButton'

function YesOrNoInputGroup({
  questionId,
  questionType,
  positiveLabel,
  negativeLabel,
}) {
  return (
    <Box>
      <ExampleButton
        name={`${questionType}#${questionId}`}
        exampleId={negativeLabel}
        content={negativeLabel}
      />
      <ExampleButton
        name={`${questionType}#${questionId}`}
        exampleId={positiveLabel}
        content={positiveLabel}
      />
    </Box>
  )
}

export default YesOrNoInputGroup

const Box = styled.div`
  display: flex;

  button {
    flex: 1;
  }

  button > label {
    width: 100%;
  }

  button + button {
    margin-left: 0.8rem;
  }
`
