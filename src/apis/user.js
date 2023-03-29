import { instance } from './config'
import { useMutation } from 'react-query'

// 로그인
export const fetchLogin = async ({ nickname, password }) => {
  const { data } = await instance.post('/users/login', { nickname, password })
  return data
}

export const useLoginMutation = () => {
  return useMutation(fetchLogin)
}

// 회원가입
export const fetchRegister = async ({ nickname, password }) => {
  const { data } = await instance.post('/users/register', {
    nickname,
    password,
  })
  return data
}
export const useRegisterMutation = () => {
  return useMutation(fetchRegister)
}
