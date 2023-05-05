import React from 'react'
import styled from 'styled-components'
import CategoryLabel from '../category/CategoryLabel'
import QuestionItem from './QuestionItem'

function QuestionsContainer({ category, questions, offset }) {
  return (
    <Item>
      <CategoryLabel emoji={category.emoji} title={category.categoryTitle} />

      <List>
        {questions.map((question, index) => (
          <QuestionItem
            key={index}
            category={category.categoryTitle}
            questionNumber={offset + index + 1} // 0부터 시작해 +1
            question={question}
          />
        ))}
      </List>
    </Item>
  )
}

export default QuestionsContainer

const Item = styled.li`
  background-color: ${(props) => props.theme.gray100};
  border-radius: 8px;
  border: none;
  padding: 2rem;
`

const List = styled.ul`
  & > li + li {
    margin-top: 5.2rem;
  }
`
