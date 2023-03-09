import React from 'react'
import styled from 'styled-components'
import LogoImage from '../assets/img_logo.svg'
import { Link } from 'react-router-dom'
import {
  ButtonArea,
  RoundButton,
  TextButton,
} from '../components/buttons/Buttons'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.blue500};
`

const LogoImg = styled.img`
  margin-top: 3.8rem;
`

const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 4.5rem;
  color: ${(props) => props.theme.gray100};
  margin: 1rem 0px 0px 2.6rem;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 7.5rem;
  color: ${(props) => props.theme.gray100};
  margin: 0.5rem 0 0 2.1rem;
`

const Description = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  color: ${(props) => props.theme.gray100};
  margin: 2.1rem 2.8rem 0 2.1rem;
  line-height: 2.24rem;
`

function Landing() {
  return (
    <Container>
      <LogoImg src={LogoImage} alt="logo-image" />
      <Subtitle>두근 - 두근</Subtitle>
      <Title>연애서류합</Title>
      <Description>
        소개팅 상대가 내 기준에 얼마나 부합할까? 내 연애 서류를 만들고 답변을
        받아봐요
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

export default Landing
