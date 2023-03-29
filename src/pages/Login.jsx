import React, { useState } from 'react'
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
import validateLogin from '../utils/validateLogin'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../apis/user'

const sendEmail = () => {
  console.log('이메일 문의')
}
const Login = () => {
  const navigate = useNavigate()
  const [valueNickname, setValueNickname] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [errorNickname, setErrorNickname] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorMessageNickname, setErrorMessageNickname] = useState('')
  const [errorMessagePassword, setErrorMessagePassword] = useState('')
  const [msg, setMsg] = useState('')

  const { mutate, isLoading, error } = useLoginMutation()

  const handlerLogin = (e) => {
    e.preventDefault()
    const isValid = validateLogin(
      valueNickname,
      valuePassword,
      setErrorNickname,
      setErrorPassword,
      setErrorMessageNickname,
      setErrorMessagePassword
    )

    if (isValid) {
      mutate(
        { nickname: valueNickname, password: valuePassword },
        {
          onSuccess: (data) => {
            localStorage.setItem('nickname', data.nickname)
            localStorage.setItem('token', data.token)
            navigate('/home')
          },
          onError: () => {
            setMsg('닉네임이나 비밀번호를 잘못 입력했습니다')
          },
        }
      )
    }
  }

  const handleNicknameChange = (e) => {
    setValueNickname(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setValuePassword(e.target.value)
  }

  return (
    <StyledMain>
      <Header btnBack />
      <StyledAirticle>
        <StyledImgWrap>
          <ImgHeartLock />
        </StyledImgWrap>
        <Title>로그인</Title>
        <StyledLoginFormArea>
          <LoginForm
            valueNickname={valueNickname}
            valuePassword={valuePassword}
            errorNickname={errorNickname}
            errorPassword={errorPassword}
            errorMessageNickname={errorMessageNickname}
            errorMessagePassword={errorMessagePassword}
            handleNicknameChange={handleNicknameChange}
            handlePasswordChange={handlePasswordChange}
          />
        </StyledLoginFormArea>
        {error && <Title>{msg}</Title>}
        <ButtonArea margin="1.6rem 0 0 0">
          <TextButton
            type="underline"
            text="로그인 정보를 잊었다면? 문의하기"
            onClick={sendEmail}
          />
        </ButtonArea>
        <ButtonArea margin="4rem 0 0 0">
          <RoundButton
            size="large"
            text={isLoading ? 'Loading...' : '다음'}
            onClick={handlerLogin}
          />
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
