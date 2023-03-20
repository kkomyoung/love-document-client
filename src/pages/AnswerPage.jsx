import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { TextArea, TextDesc, Title } from '../components/texts/Texts'
import { ReactComponent as IconLetter } from '../assets/icon_letter.svg'

function AnswerPage() {
  return (
    <StyledMain>
      <Header title="답변하기" btnBack />
      <StyledAirticle>
        <TextArea>
          <Title>
            <i aria-hidden="true">
              <IconLetter />
            </i>
            답변하기
          </Title>
          <TextDesc>
            <span>솔직한 답변으로 나와 잘 맞는 사람을 찾아봐요</span>
          </TextDesc>
        </TextArea>

        <StyledSectionQuestion></StyledSectionQuestion>
      </StyledAirticle>
    </StyledMain>
  )
}

export default AnswerPage

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
`

const StyledAirticle = styled.article`
  padding: 0 2.4rem;
`
const StyledSectionQuestion = styled.section`
  margin-top: 2.8rem;

  & > div + div {
    margin-top: 2.8rem;
  }
`
