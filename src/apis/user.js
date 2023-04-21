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

export const getUserInfo = async () => {
  const { data } = await instance.get('/users')
  return data
}
