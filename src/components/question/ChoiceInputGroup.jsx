import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ExampleButton from './ExampleButton'
import { useRecoilState } from 'recoil'
import { answerAtom } from '../../utils/atoms'

function ChoiceInputGroup({
  questionId,
  questionType,
  multiple,
  examples,
  answeredChoices,
}) {
  const [checkedChoices, setCheckedChoices] = useState(null)
  const [answer, setAnswer] = useRecoilState(answerAtom)
  const onChoiceButtonClick = (exampleId) => {
    let choices = [exampleId]

    // 복수선택일 때만 로직 실행
    if (multiple === 'Y') {
      const existAnswer = answer.answerList.find(
        (answer) => answer.categoryItemId === questionId
      )

      choices = existAnswer ? [...existAnswer.choiceIdList] : []
      const choiceIndex = choices.indexOf(exampleId)
      if (choiceIndex < 0) {
        choices.push(exampleId)
      } else {
        choices.splice(choiceIndex, 1)
      }
    }

    setAnswer((prev) => ({
      ...prev,
      answerList: [
        ...prev.answerList.filter(
          (answer) => answer.categoryItemId !== questionId
        ),
        {
          categoryItemId: questionId,
          questionType,
          choiceIdList: choices,
          score: null,
          rangeList: null,
          yn: null,
        },
      ],
    }))
    setCheckedChoices(choices)
  }

  useEffect(() => {
    setCheckedChoices(answeredChoices)
  }, [answeredChoices])

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
          isChecked={checkedChoices && checkedChoices.includes(example.id)}
        />
      ))}
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  flex-direction: column;

  span > label {
    width: 100%;
  }

  span + span {
    margin-top: 0.8rem;
  }
`

export default ChoiceInputGroup
