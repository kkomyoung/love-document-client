import React from 'react'
import styled from 'styled-components'
import ExampleButton from './ExampleButton'
import { useSetRecoilState } from 'recoil'
import { answerAtom } from '../../utils/atoms'

function YesOrNoInputGroup({
  questionId,
  questionType,
  positiveLabel,
  negativeLabel,
}) {
  const setAnswer = useSetRecoilState(answerAtom)
  const onYesOrNotButtonClick = (yn) => {
    setAnswer((prev) => ({
      ...prev,
      answerList: [
        ...prev.answerList.filter(
          (answer) => answer.categoryItemId !== questionId
        ),
        {
          categoryItemId: questionId,
          questionType,
          yn,
          score: null,
          choiceIdList: null,
          rangeList: null,
        },
      ],
    }))
  }

  return (
    <Box>
      <ExampleButton
        name={`${questionType}#${questionId}`}
        exampleId={negativeLabel}
        content={negativeLabel}
        answer={'N'}
        onClick={onYesOrNotButtonClick}
      />
      <ExampleButton
        name={`${questionType}#${questionId}`}
        exampleId={positiveLabel}
        content={positiveLabel}
        answer={'Y'}
        onClick={onYesOrNotButtonClick}
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
