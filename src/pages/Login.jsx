import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { Title } from '../components/texts/Texts'
import { ReactComponent as ImgHeartLock } from '../assets/img_heart_lock.svg'
import LoginForm from '../components/form/LoginForm'

const LoginHandler = () => {
  console.log('로그인')
}

const Login = () => {
  return (
    <StyledMain>
      <Header btnBack />
      <StyledAirticle>
        <StyledImgWrap>
          <ImgHeartLock />
        </StyledImgWrap>
        <Title>로그인</Title>
        <StyledLoginFormArea>
          <LoginForm />
        </StyledLoginFormArea>
        <StyledLinkArea>
          <a href="#none">로그인 정보를 잊었다면? 문의하기</a>
        </StyledLinkArea>
        <ButtonArea margin="4rem 0 0 0">
          <RoundButton onClick={LoginHandler} size="large" text="다음" />
        </ButtonArea>
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

const StyledImgWrap = styled.figure`
  margin-bottom: 4.3rem;

  svg {
    display: block;
    width: 100%;
  }
`

const StyledLoginFormArea = styled.div`
  margin-top: 2.8rem;
`

const StyledLinkArea = styled.div`
  margin-top: 1.6rem;
  text-align: center;

  a {
    display: inline-block;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid ${(props) => props.theme.blue700};
    ${(props) => props.theme.fontSize.label_m_sb};
    color: ${(props) => props.theme.blue700};
  }
`

export default Login
