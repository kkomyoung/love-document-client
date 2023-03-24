function validateLogin(
  valueNickname,
  valuePassword,
  setErrorNickname,
  setErrorPassword,
  setErrorMessageNickname,
  setErrorMessagePassword
) {
  let error = false

  // 닉네임
  if (valueNickname === '') {
    setErrorNickname(true)
    setErrorMessageNickname('닉네임을 입력해주세요')
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
  } else {
    setErrorPassword(false)
    setErrorMessagePassword('')
  }

  return !error
}

export default validateLogin
