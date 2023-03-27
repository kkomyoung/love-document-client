import { instance } from './config'

export const login = async ({ nickname, password }) => {
  const { data } = await instance.post('/users/login', { nickname, password })
  return data
}
