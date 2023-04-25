import React from 'react'
import styled from 'styled-components'
import changeBgColor from '../utils/changeBgColor'
import { Link, useParams } from 'react-router-dom'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { ReactComponent as IconLetter } from '../assets/img_letter.svg'

const AnswerLanding = () => {
  const params = useParams()

  changeBgColor('#79c7ff')
  return (
    <StyledMain>
      <StyledImgWrap>
        <IconLetter />
      </StyledImgWrap>
      <StyledTitle>
        <StyledSubTitle>두근 - 두근</StyledSubTitle>
        연애서류합
      </StyledTitle>
      <StyledDescription>
        <span>소개팅 상대방 망고님이 보낸</span>
        <br />
        <span>질문에 답변해보세요 🤩</span>
      </StyledDescription>
      <ButtonArea margin="3.1rem 0 0 0">
        <RoundButton
          as={Link}
          to={`/research/${params.questionId}/answer`}
          color="white"
          text="답변하기"
        />
      </ButtonArea>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  background-color: ${(props) => props.theme.blue500};
  padding: 5rem 0 7.6rem;

  @media (max-width: 499px) {
    min-height: calc(100vh - 12.6rem);
  }
`

const StyledImgWrap = styled.figure`
  padding: 0 3.3rem;
  svg {
    width: 100%;
  }
`

const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 7.5rem;
  color: ${(props) => props.theme.gray100};
  margin: 2.1rem;
  letter-spacing: -0.03em;

  @media (max-width: 360px) {
    font-size: 20vw;
  }
`

const StyledSubTitle = styled.span`
  display: block;
  font-weight: 400;
  font-size: 4.5rem;
  color: ${(props) => props.theme.gray100};
  margin: 0 0 0.5rem 0.5rem;

  @media (max-width: 360px) {
    font-size: 12vw;
  }
`

const StyledDescription = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  color: ${(props) => props.theme.gray100};
  margin: 2.1rem 2.8rem 0 2.1rem;
  line-height: 1.4;

  @media (max-width: 360px) {
    font-size: 5vw;
  }
`
export default AnswerLanding
