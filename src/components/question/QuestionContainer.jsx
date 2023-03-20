import React from 'react'
import styled from 'styled-components'
import CategoryLabel from '../category/CategoryLabel'
import QuestionBox from './QuestionBox'

function QuestionContainer({ category, questions, offset }) {
  return (
    <StyledContainer>
      <CategoryLabel category={category} />

      {questions.map((question, index) => (
        <QuestionBox
          key={index}
          category={category}
          questionNumber={offset + index + 1}
          question={question}
        />
      ))}
    </StyledContainer>
  )
}

export default QuestionContainer

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.gray100};
  border-radius: 8px;
  border: none;
  padding: 2rem;

  & > div + div {
    margin-top: 5.2rem;
  }
`
