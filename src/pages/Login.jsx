import React, { useState } from 'react'
// import { useMutation } from 'react-query'
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

  // const login = (info) => {
  //   fetch('http://api-dev.love-document.com/users/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(info),
  //   }).then((res) => res.json())
  // }

  // const { mutate } = useMutation(login, {
  //   onMutate: (variables) => {
  //     console.log('onMutate', variables)
  //   },
  //   onSuccess: (data) => {
  //     console.log('응답 값:', data)
  //   },
  //   onError: (error) => {
  //     // 요청에 에러가 발생된 경우
  //     console.log('onError', error)
  //   },
  //   onSettled: () => {
  //     // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
  //     console.log('onSettled')
  //   },
  // })

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
      console.log('로그인')
      // mutate({ nickname: valueNickname, password: valuePassword })
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
