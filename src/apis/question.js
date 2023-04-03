import { instance } from './config'

export const getQuestions = async () => {
  const { data } = await instance.get('/questions')
  return data
}
