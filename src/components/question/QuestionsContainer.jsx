import React from 'react'
import styled from 'styled-components'
import CategoryLabel from '../category/CategoryLabel'
import QuestionItem from './QuestionItem'

function QuestionsContainer({ category, questions, offset }) {
  return (
    <Box>
      <CategoryLabel category={category} />

      <List>
        {questions.map((question, index) => (
          <QuestionItem
            key={index}
            category={category}
            questionNumber={offset + index + 1}
            question={question}
          />
        ))}
      </List>
    </Box>
  )
}

export default QuestionsContainer

const Box = styled.div`
  background-color: ${(props) => props.theme.gray100};
  border-radius: 8px;
  border: none;
  padding: 2rem;

  & > div + div {
    margin-top: 5.2rem;
  }
`

const List = styled.ul``
