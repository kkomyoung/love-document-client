import { instance } from './config'

// 로그인
export const login = async ({ nickname, password }) => {
  const { data } = await instance.post('/users/login', { nickname, password })
  return data
}

// 회원가입
export const register = async ({ nickname, password }) => {
  const { data } = await instance.post('/users/register', {
    nickname,
    password,
  })
  return data
}

// 유저 정보조회
export const getUserInfo = async () => {
  const { data } = await instance.get('/users')
  return data
}

// 닉네임 중복 확인
export const postUserOverlap = async ({ nickname }) => {
  const { data } = await instance.post('/users/nickname', {
    nickname,
  })
  return data
}

// 답변 목록 조회
export const getUsersAnswers = async () => {
  const { data } = await instance.get('/users/answers')
  return data
}
