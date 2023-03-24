function validateRegister(
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

export default validateRegister
