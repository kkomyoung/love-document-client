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
        className="nickname"
        handleInputChange={handleNicknameChange}
        placeholder="닉네임"
      />
      <LoginInput
        inputValue={valuePassword}
        error={errorPassword}
        errorMessage={errorMessagePassword}
        className="password"
        handleInputChange={handlePasswordChange}
        placeholder="비밀번호"
      />
    </>
  )
}

export default LoginForm
