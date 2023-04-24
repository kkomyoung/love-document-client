import React from 'react'
import styled from 'styled-components'
import ExampleButton from './ExampleButton'
import { useRecoilState } from 'recoil'
import { answersAtom } from '../../utils/atoms'

function ChoiceInputGroup({ questionId, questionType, multiple, examples }) {
  const [answers, setAnswers] = useRecoilState(answersAtom)
  const onChoiceButtonClick = (exampleId) => {
    const answer = answers.find(
      (answer) => answer.categoryItemId === questionId
    )

    const choices = answer ? [...answer.choiceIdList] : []
    const choiceIndex = choices.indexOf(exampleId)
    if (choiceIndex < 0) {
      choices.push(exampleId)
    } else {
      choices.splice(choiceIndex, 1)
    }

    setAnswers((prev) => [
      ...prev.filter((answer) => answer.categoryItemId !== questionId),
      {
        categoryItemId: questionId,
        questionType,
        choiceIdList: choices,
        score: null,
        rangeList: null,
        yn: null,
      },
    ])
  }

  return (
    <Box>
      {examples.map((example) => (
        <ExampleButton
          key={example.id}
          exampleId={example.id}
          name={`${questionType}#${questionId}`}
          multiple={multiple}
          content={example.content}
          answer={example.id}
          onClick={onChoiceButtonClick}
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
