const validateNickname = (value, setError, setErrorMessage) => {
  const prevValue = localStorage.nickname
    ? localStorage.getItem('nickname')
    : false
  let error = false

  // 특수문자와 공백 제외
  // eslint-disable-next-line no-useless-escape
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\s]/g

  if (value === '') {
    setError(true)
    setErrorMessage('닉네임을 입력해주세요')
    error = true
  } else if (value.length > 10) {
    setError(true)
    setErrorMessage('1~10자 이내로 입력해주세요')
    error = true
  } else if (regExp.test(value)) {
    setError(true)
    setErrorMessage('특수문자와 공백을 제거해주세요')
    error = true
  } else if (prevValue === value) {
    setError(true)
    setErrorMessage('기존 닉네임과 동일해요')
    error = true
  } else {
    setError(false)
    setErrorMessage('')
  }

  return !error
}

const validatePassword = (value, setError, setErrorMessage) => {
  let error = false

  if (value === '') {
    setError(true)
    setErrorMessage('비밀번호를 입력해주세요')
    error = true
  } else if (value.length < 4 || value.length > 20) {
    setError(true)
    setErrorMessage('1~10자 이내로 입력해주세요')
    error = true
  } else {
    setError(false)
    setErrorMessage('')
  }

  return !error
}

// 회원가입
const validateRegister = (
  valueNickname,
  valuePassword,
  setErrorNickname,
  setErrorPassword,
  setErrorMessageNickname,
  setErrorMessagePassword
) => {
  const checkNickname = validateNickname(
    valueNickname,
    setErrorNickname,
    setErrorMessageNickname
  )
  const checkPassword = validatePassword(
    valuePassword,
    setErrorPassword,
    setErrorMessagePassword
  )
  const isValid = checkNickname && checkPassword
  return isValid
}

// 로그인
const validateLogin = (
  valueNickname,
  valuePassword,
  setErrorNickname,
  setErrorPassword,
  setErrorMessageNickname,
  setErrorMessagePassword
) => {
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

export { validateNickname, validatePassword, validateRegister, validateLogin }
