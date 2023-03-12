import React from 'react'
import styled from 'styled-components'
import CategoryLabel from '../category/CategoryLabel'

function QuestionBox({ category }) {
  return (
    <StyledBox>
      <CategoryLabel category={category} />
    </StyledBox>
  )
}

const StyledBox = styled.div`
  background-color: ${(props) => props.theme.gray100};
  border-radius: 8px;
  border: none;
  padding: 2rem;
`

export default QuestionBox
