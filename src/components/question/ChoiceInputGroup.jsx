import React from 'react'
import styled from 'styled-components'
import ExampleButton from './ExampleButton'
import { useRecoilState } from 'recoil'
import { answersAtom } from '../../utils/atoms'

function ChoiceInputGroup({ questionId, questionType, multiple, examples }) {
  const [answers, setAnswers] = useRecoilState(answersAtom)
  const onChoiceButtonClick = (exampleId) => {
    let choices = [exampleId]

    // 복수선택일 때만 로직 실행
    if (multiple === 'Y') {
      const answer = answers.find(
        (answer) => answer.categoryItemId === questionId
      )

      choices = answer ? [...answer.choiceIdList] : []
      const choiceIndex = choices.indexOf(exampleId)
      if (choiceIndex < 0) {
        choices.push(exampleId)
      } else {
        choices.splice(choiceIndex, 1)
      }
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
