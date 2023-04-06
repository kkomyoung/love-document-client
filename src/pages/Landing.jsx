import React from 'react'
import styled from 'styled-components'
import changeBgColor from '../utils/changeBgColor'
import Lottie from '../components/lotties/Lottie'
import { Link } from 'react-router-dom'
import {
  ButtonArea,
  RoundButton,
  TextButton,
} from '../components/buttons/Buttons'

const Landing = () => {
  changeBgColor('#79c7ff')
  return (
    <StyledMain>
      <Lottie data="main" />
      <StyledTitle>
        <StyledSubTitle>두근 - 두근</StyledSubTitle>
        연애서류합
      </StyledTitle>
      <StyledDescription>
        <span>소개팅 상대가 내 기준에 얼마나 부합할까?</span>
        <br />
        <span>내 연애 서류를 만들고 답변을 받아봐요</span>
      </StyledDescription>
      <ButtonArea margin="2.4rem 0 0 0">
        <RoundButton as={Link} to="/onboarding" color="white" text="시작하기" />
      </ButtonArea>
      <ButtonArea margin="2.1rem 0 0 0">
        <TextButton
          as={Link}
          to="/login"
          type="underline"
          text="이미 질문지를 만들었다면? 로그인"
        />
      </ButtonArea>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  background-color: ${(props) => props.theme.blue500};
  padding: 3rem 0 3rem;

  @media (max-width: 499px) {
    min-height: calc(100vh - 6rem);
  }
`

const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 5.4rem;
  color: ${(props) => props.theme.gray100};
  margin: 2.1rem 2.1rem 0;
  letter-spacing: -0.03em;

  @media (max-width: 360px) {
    font-size: 20vw;
  }
`

const StyledSubTitle = styled.span`
  display: block;
  font-weight: 400;
  font-size: 3.2rem;
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
  margin: 1.2rem 2.8rem 0 2.1rem;
  line-height: 1.4;

  @media (max-width: 360px) {
    font-size: 5vw;
  }
`
export default Landing
