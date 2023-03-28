import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { TextArea, Title } from '../components/texts/Texts'
import { ReactComponent as IconLetter } from '../assets/icon_letter.svg'
import Answer from '../components/Answer'

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
          <AnswersContainer>
            {answers.map((answer) => (
              <Answer key={answer.id} {...answer} />
            ))}
          </AnswersContainer>
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

const AnswersContainer = styled.div`
  margin-top: 2.8rem;

  & > div + div {
    margin-top: 1.6rem;
  }
`
