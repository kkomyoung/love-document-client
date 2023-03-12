import React from 'react'
import styled from 'styled-components'
import CategoryLabel from '../category/CategoryLabel'
import MultipleChoice from './MultipleChoice'

function QuestionBox({ category, questions }) {
  return (
    <StyledBox>
      <CategoryLabel category={category} />

      {questions.map((question, index) => (
        <>
          <StyledQuestionTitleArea key={question.id}>
            <StyledQuestionTitle>
              <span>Q{index + 1}</span>
            </StyledQuestionTitle>
            <StyledQuestionTitle>
              {question.title}
              {question.type === 'MULTIPLE-CHOCIE-MULTIPLE' && (
                <p>복수 선택 가능</p>
              )}
            </StyledQuestionTitle>
          </StyledQuestionTitleArea>

          {question.type === 'MULTIPLE-CHOCIE-MULTIPLE' && (
            <MultipleChoice type="MULTIPLE" examples={question.examples} />
          )}
        </>
      ))}
    </StyledBox>
  )
}

const StyledBox = styled.div`
  background-color: ${(props) => props.theme.gray100};
  border-radius: 8px;
  border: none;
  padding: 2rem;
`

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
export default QuestionBox
