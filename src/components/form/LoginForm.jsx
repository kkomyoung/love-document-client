import React from 'react'
import LoginInput from './LoginInput'

const LoginForm = ({
  valueNickname,
  valuePassword,
  errorNickname,
  errorPassword,
  errorMessageNickname,
  errorMessagePassword,
  handlerNicknameChange,
  handlerPasswordChange,
}) => {
  return (
    <>
      <LoginInput
        inputValue={valueNickname}
        error={errorNickname}
        errorMessage={errorMessageNickname}
        handlerInputChange={handlerNicknameChange}
        name="nickname"
        placeholder="닉네임"
      />
      <LoginInput
        inputValue={valuePassword}
        error={errorPassword}
        errorMessage={errorMessagePassword}
        handlerInputChange={handlerPasswordChange}
        type="password"
        name="password"
        pattern="[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+"
        placeholder="비밀번호"
      />
    </>
  )
}

export default LoginForm
