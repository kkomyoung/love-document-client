import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { TextArea, Title } from '../components/texts/Texts'
import { ReactComponent as IconLetter } from '../assets/icon_letter.svg'
import AnswerItem from '../components/answer/AnswerItem'

const answers = [
  {
    id: 1,
    nickname: '영애',
    age: 26,
    address: '서울 강남구',
    match: 70,
    date: '2월 7일',
  },
  {
    id: 2,
    nickname: '본휘',
    age: 29,
    address: '서울 강남구',
    match: null,
    date: '2월 8일',
  },
]

function AnswersPage() {
  const onDelete = (id) => {}

  return (
    <StyledMain>
      <Header title="도착한 답변" btnBack></Header>
      <StyledAirticle>
        <TextArea>
          <Title>
            <i aria-hidden="true">
              <IconLetter />
            </i>
            도착한 답변
          </Title>
        </TextArea>

        <StyledAnswersSection>
          <AnswerList>
            {answers.map((answer) => (
              <AnswerItem key={answer.id} {...answer} onDelete={onDelete} />
            ))}
          </AnswerList>
        </StyledAnswersSection>
      </StyledAirticle>
    </StyledMain>
  )
}

export default AnswersPage

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
`

const StyledAirticle = styled.article``
const StyledAnswersSection = styled.section``

const AnswerList = styled.ul`
  margin-top: 2.8rem;
  padding: 0px 2rem;

  & > li + li {
    margin-top: 1.6rem;
  }
`
