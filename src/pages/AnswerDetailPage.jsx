import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { TextArea, Title } from '../components/texts/Texts'

const AnswerDetailPage = () => {
  return (
    <StyledMain>
      <Header title="질문지 준비 완료" btnBack btnDelete />
      <StyledAirticle>
        <TextArea>
          <Title>
            <span>키위</span>님의 답변
          </Title>
        </TextArea>
      </StyledAirticle>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
  padding-bottom: 10rem;
`

const StyledAirticle = styled.article`
  padding: 0 2.4rem;

  h1 > span {
    color: ${(props) => props.theme.blue500};
  }
`

export default AnswerDetailPage
