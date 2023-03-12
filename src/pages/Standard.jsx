import React from 'react'
import styled from 'styled-components'
import QuestionBox from '../components/\bquestion/QuestionBox'
import Header from '../components/header/Header'
import { TextArea, TextDesc, Title } from '../components/texts/Texts'

const questions = [
  {
    id: 24,
    title: '키는 어느정도를 선호하세요?',
    type: 'RANGE',
  },
  {
    id: 105,
    title: '타투 어때요?',
    type: 'YES-OR-NO',
  },
  {
    id: 36,
    title: '어떤 종교가 있었으면 하나요?',
    type: 'MULTIPLE-CHOCIE-MULTIPLE',
    examples: [
      { id: 22, text: '무교' },
      { id: 23, text: '기독교' },
      { id: 24, text: '천주교' },
      { id: 25, text: '불교' },
      { id: 26, text: '기타' },
    ],
  },
]

function Standard() {
  return (
    <StyledMain>
      <Header btnBack />
      <StyledAirticle>
        <TextArea>
          <Title>내 기준 작성하기</Title>
          <TextDesc>
            <span>내 애인후보.. 이것만큼은.. 절대 지켜!!</span>
            <br />
            <span>상대방에게 바라는 조건을 작성해주세요</span>
          </TextDesc>
        </TextArea>

        <StyledSectionQuestion>
          <QuestionBox category="외모" questions={questions} />
        </StyledSectionQuestion>
      </StyledAirticle>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
`

const StyledAirticle = styled.article`
  padding: 0 2.4rem;
`

const StyledSectionQuestion = styled.section`
  margin-top: 2.8rem;
`

export default Standard
