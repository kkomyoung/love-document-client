import { postUserOverlap } from '../apis'

const validateNickname = async (
  value,
  setError,
  setErrorMessage,
  openToastPopup
) => {
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

  // 중복 닉네임 확인
  try {
    await postUserOverlap({ nickname: value })
    error = false
  } catch (err) {
    error = true
    if (err.response.status === 409 && prevValue !== value) {
      if (openToastPopup) {
        openToastPopup('중복된 닉네임이에요')
      } else {
        setError(true)
        setErrorMessage('중복된 닉네임이에요')
      }
    }
  }

  return !error
}

const validatePassword = (value, setError, setErrorMessage) => {
  let error = false

  // 특수문자와 공백 제외
  // eslint-disable-next-line no-useless-escape
  const regExp = /\s/g

  if (value === '') {
    setError(true)
    setErrorMessage('비밀번호를 입력해주세요')
    error = true
  } else if (value.length < 4 || value.length > 20) {
    setError(true)
    setErrorMessage('1~10자 이내로 입력해주세요')
    error = true
  } else if (regExp.test(value)) {
    setError(true)
    setErrorMessage('공백을 제거해주세요')
    error = true
  } else {
    setError(false)
    setErrorMessage('')
  }

  return !error
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

export { validateNickname, validatePassword, validateLogin }
