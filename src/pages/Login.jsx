import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import {
  ButtonArea,
  RoundButton,
  TextButton,
} from '../components/buttons/Buttons'
import { Title } from '../components/texts/Texts'
import { ReactComponent as ImgHeartLock } from '../assets/img_heart_lock.svg'
import LoginForm from '../components/form/LoginForm'

const LoginHandler = () => {
  console.log('로그인')
}
const sendEmail = () => {
  console.log('이메일 문의')
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
        <ButtonArea margin="1.6rem 0 0 0">
          <TextButton
            type="underline"
            text="로그인 정보를 잊었다면? 문의하기"
            onClick={sendEmail}
          />
        </ButtonArea>
        <ButtonArea margin="4rem 0 0 0">
          <RoundButton size="large" text="다음" onClick={LoginHandler} />
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

export default Login
