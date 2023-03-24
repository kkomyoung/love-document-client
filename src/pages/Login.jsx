import React, { useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components'
import Header from '../components/header/Header'
import {
  ButtonArea,
  RoundButton,
  TextButton,
} from '../components/buttons/Buttons'
import { Title } from '../components/texts/Texts'
import { ReactComponent as ImgHeartLock } from '../assets/img_heart_lock.svg'
import { LoginForm } from '../components/form/LoginForm'

const sendEmail = () => {
  console.log('이메일 문의')
}
const Login = () => {
  const [valueNickname, setValueNickname] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [errorNickname, setErrorNickname] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorMessageNickname, setErrorMessageNickname] = useState('')
  const [errorMessagePassword, setErrorMessagePassword] = useState('')

  const loginMutation = useMutation((body) => {
    return fetch('http://api-dev.love-document.com/users/login', {
      method: 'POST',
      body: JSON.stringify(body),
    }).then((res) => res.json())
  })

  const handlerLogin = (e) => {
    e.preventDefault()
    const isValid = validateInputs()

    if (isValid) {
      loginMutation.mutate({ nickname: valueNickname, password: valuePassword })

      if (loginMutation.isLoading) return 'Loading...'

      if (loginMutation.isError) return console.log(loginMutation.error.message)

      console.log(loginMutation.data)
    }
  }

  const validateInputs = () => {
    let error = false

    // 닉네임
    if (valueNickname === '') {
      setErrorNickname(true)
      setErrorMessageNickname('닉네임을 입력해주세요')
      error = true
    } else if (valueNickname.length > 10) {
      setErrorNickname(true)
      setErrorMessageNickname('1~10자 이내로 입력해주세요')
      error = true
    } else {
      setErrorNickname(false)
      setErrorMessageNickname('')
    }

    // 비밀번호
    if (valuePassword === '') {
      setErrorPassword(true)
      setErrorMessagePassword('비밀번호를 입력해주세요')
      error = true
    } else if (valuePassword.length < 4 || valuePassword.length > 20) {
      setErrorPassword(true)
      setErrorMessagePassword('4~20자 이내로 입력해주세요')
      error = true
    } else {
      setErrorPassword(false)
      setErrorMessagePassword('')
    }

    return !error
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
        <ButtonArea margin="1.6rem 0 0 0">
          <TextButton
            type="underline"
            text="로그인 정보를 잊었다면? 문의하기"
            onClick={sendEmail}
          />
        </ButtonArea>
        <ButtonArea margin="4rem 0 0 0">
          <RoundButton size="large" text="다음" onClick={handlerLogin} />
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
