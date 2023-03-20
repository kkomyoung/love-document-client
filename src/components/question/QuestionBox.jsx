import React from 'react'
import styled from 'styled-components'
import MultipleChoice from './MultipleChoice'
import Score from './Score'
import YesOrNo from './YesOrNo'
import Range from './Range'
import Input from '../form/Input'

function QuestionBox({ category, questionNumber, question }) {
  return (
    <StyledBox>
      <StyledQuestionTitleArea key={question.id}>
        <StyledQuestionTitle>
          <span>Q{questionNumber}</span>
        </StyledQuestionTitle>
        <StyledQuestionTitle>
          {question.title}
          {question.type === 'MULTIPLE-CHOCIE' && question.isMultiChoice && (
            <p>복수 선택 가능</p>
          )}
        </StyledQuestionTitle>
      </StyledQuestionTitleArea>

      {question.type === 'INPUT' && <Input />}

      {question.type === 'MULTIPLE-CHOCIE' && (
        <MultipleChoice
          name={category + question.id}
          isMultiChoice={question.isMultiChoice}
          examples={question.examples}
        />
      )}

      {question.type === 'YES-OR-NO' && (
        <YesOrNo name={category + question.id} examples={question.examples} />
      )}

      {question.type === 'SCORE' && (
        <Score
          name={category + question.id}
          positiveText={question.positiveText}
          negativeText={question.negativeText}
        />
      )}

      {question.type === 'RANGE' && <Range />}
    </StyledBox>
  )
}

export default QuestionBox

const StyledBox = styled.div``

const StyledQuestionTitleArea = styled.div`
  display: flex;
  margin-bottom: 2rem;
`

const StyledQuestionTitle = styled.h4`
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
