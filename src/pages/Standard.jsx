import React from 'react'
import styled from 'styled-components'
import QuestionBox from '../components/\bquestion/QuestionBox'
import Header from '../components/header/Header'
import { TextArea, TextDesc, Title } from '../components/texts/Texts'

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
          <QuestionBox category="외모" />
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
