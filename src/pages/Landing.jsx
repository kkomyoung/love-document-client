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
    <Container>
      <Lottie data="main" />
      <Title>
        <Subtitle>두근 - 두근</Subtitle>
        연애서류합
      </Title>
      <Description>
        <span>소개팅 상대가 내 기준에 얼마나 부합할까?</span>
        <br />
        <span>내 연애 서류를 만들고 답변을 받아봐요</span>
      </Description>
      <ButtonArea margin="3.1rem 0 0 0">
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
    </Container>
  )
}

const Container = styled.main`
  background-color: ${(props) => props.theme.blue500};
  padding: 5rem 0 7.6rem;

  @media (max-width: 499px) {
    min-height: calc(100vh - 12.6rem);
  }
`

const Subtitle = styled.span`
  display: block;
  font-weight: 400;
  font-size: 4.5rem;
  color: ${(props) => props.theme.gray100};
  margin: 0 0 0.5rem 0.5rem;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 7.5rem;
  color: ${(props) => props.theme.gray100};
  margin: 2.1rem;
  letter-spacing: -0.03em;
`

const Description = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  color: ${(props) => props.theme.gray100};
  margin: 2.1rem 2.8rem 0 2.1rem;
  line-height: 1.4;
`
export default Landing
