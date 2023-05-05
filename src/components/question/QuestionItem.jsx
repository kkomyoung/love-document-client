import React from 'react'
import styled from 'styled-components'
import ChoiceInputGroup from './ChoiceInputGroup'
import ScoreInputGroup from './ScoreInputGroup'
import YesOrNoInputGroup from './YesOrNoInputGroup'
import RangeInputGroup from './RangeInputGroup'
import { QUESTION_TYPE } from '../../utils/constants'
import QuestionInput from './QuestionInput'

// eslint-disable-next-line no-unused-vars
const categoryItemInfoList = [
  {
    id: 7,
    multiple: 'Y',
    type: 'CHOICE',
    question: '어떤 종교가 있었으면 하나요?',
    negativeLabel: null,
    positiveLabel: null,
    exampleList: [
      {
        id: 9,
        content: '천주교',
      },
      {
        id: 10,
        content: '무교',
      },
      {
        id: 11,
        content: '기독교',
      },
      {
        id: 12,
        content: '불교',
      },
      {
        id: 19,
        content: '기타',
      },
    ],
    choiceIdList: [],
    rangeList: [],
    score: 2,
    yn: null,
  },
  {
    id: 8,
    multiple: 'N',
    type: 'YN',
    question: '상대방이 결혼 생각 있었으면 하나요?',
    negativeLabel: '결혼 생각 없는',
    positiveLabel: '결혼 생각 있는',
    exampleList: [],
    choiceIdList: [],
    rangeNumList: [],
    scoreNumList: [],
    ynBoolList: [],
  },
  {
    id: 9,
    multiple: 'N',
    type: 'YN',
    question: '상대방이 아이 생각이 있었으면 하나요?',
    negativeLabel: '아이 생각 없는',
    positiveLabel: '아이 생각 있는',
    exampleList: [],
    choiceIdList: [],
    rangeNumList: [],
    scoreNumList: [],
    ynBoolList: [],
  },
  {
    id: 10,
    multiple: 'N',
    type: 'SCORE',
    question: '정치성향이 어땠으면 하나요?',
    negativeLabel: '보수',
    positiveLabel: '진보',
    exampleList: [],
    choiceIdList: [],
    rangeNumList: [],
    scoreNumList: [],
    ynBoolList: [],
  },
  {
    id: 11,
    multiple: 'N',
    type: 'SCORE',
    question: '술을 즐겼으면 하나요?',
    negativeLabel: '술을 싫어하는',
    positiveLabel: '술을 좋아하는',
    exampleList: [],
    choiceIdList: [],
    rangeNumList: [],
    scoreNumList: [],
    ynBoolList: [],
  },
  {
    id: 12,
    multiple: 'N',
    type: 'YN',
    question: '흡연 어떠세요?',
    negativeLabel: '안돼요',
    positiveLabel: '괜찮아요',
    exampleList: [],
    choiceIdList: [],
    rangeNumList: [],
    scoreNumList: [],
    ynBoolList: [],
  },
]
function QuestionItem({ questionNumber, question }) {
  const {
    id,
    name,
    question: title,
    exampleList: examples,
    type,
    multiple,
    positiveLabel,
    negativeLabel,
    placeholder,
    choiceIdList,
    rangeList,
    score,
    yn,
  } = question

  return (
    <Item>
      <TitleBox>
        <QuestionText>
          <span>Q{questionNumber}</span>
        </QuestionText>
        <QuestionText>
          {title}
          {type === QUESTION_TYPE.CHOICE && multiple === 'Y' && (
            <p>복수 선택 가능</p>
          )}
        </QuestionText>
      </TitleBox>

      {type === 'INPUT' && (
        <QuestionInput
          questionId={id}
          name={name || `input${id}`}
          type="text"
          placeholder={placeholder}
        />
      )}

      {type === QUESTION_TYPE.CHOICE && (
        <ChoiceInputGroup
          questionId={id}
          questionType={type}
          multiple={multiple}
          examples={examples}
          choices={choiceIdList}
        />
      )}

      {type === QUESTION_TYPE.YN && (
        <YesOrNoInputGroup
          questionId={id}
          questionType={type}
          positiveLabel={positiveLabel}
          negativeLabel={negativeLabel}
          yn={yn}
        />
      )}

      {type === QUESTION_TYPE.SCORE && (
        <ScoreInputGroup
          questionId={id}
          questionType={type}
          positiveLabel={positiveLabel}
          negativeLabel={negativeLabel}
          score={score}
        />
      )}

      {question.type === QUESTION_TYPE.RANGE && (
        <RangeInputGroup
          questionId={id}
          questionType={type}
          range={rangeList}
        />
      )}
    </Item>
  )
}

export default QuestionItem

const Item = styled.li``

const TitleBox = styled.div`
  display: flex;
  margin-bottom: 2rem;
`

const QuestionText = styled.h4`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2;
  color: ${(props) => props.theme.gray800};

  span {
    color: ${(props) => props.theme.blue500};
    margin-right: 0.8rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.6;
    color: ${(props) => props.theme.gray800};
  }
`
