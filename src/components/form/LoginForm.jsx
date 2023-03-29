import React from 'react'
import LoginInput from './LoginInput'

const LoginForm = ({
  valueNickname,
  valuePassword,
  errorNickname,
  errorPassword,
  errorMessageNickname,
  errorMessagePassword,
  handleNicknameChange,
  handlePasswordChange,
}) => {
  return (
    <>
      <LoginInput
        inputValue={valueNickname}
        error={errorNickname}
        errorMessage={errorMessageNickname}
        handleInputChange={handleNicknameChange}
        name="nickname"
        placeholder="닉네임"
      />
      <LoginInput
        inputValue={valuePassword}
        error={errorPassword}
        errorMessage={errorMessagePassword}
        handleInputChange={handlePasswordChange}
        type="password"
        name="password"
        pattern="[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+"
        placeholder="비밀번호"
      />
    </>
  )
}

export default LoginForm
