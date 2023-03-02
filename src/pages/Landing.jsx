import React from 'react'
import styled from 'styled-components'
import LogoImage from '../assets/img-logo.svg'
import { Link } from 'react-router-dom'

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

const StartBtn = styled.button`
  font-weight: 500;
  font-size: 1.6rem;
  color: ${(props) => props.theme.gray900};
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.bgColor};
  border-radius: 53px;
  padding: 1.8rem 4.05rem;
  margin: 3.1rem auto 0 auto;
`

const LoginLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.1rem;

  a {
    color: ${(props) => props.theme.blue700};
    font-weight: 500;
    font-size: 1.6rem;
  }
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
      <StartBtn>
        <Link to="/onboarding">시작하기</Link>
      </StartBtn>
      <LoginLinkWrapper>
        <Link to="/login">
          <u>이미 질문지를 만들었다면? 로그인</u>
        </Link>
      </LoginLinkWrapper>
    </Container>
  )
}

export default Landing
