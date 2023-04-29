import { instance } from './config'

export const getQuestionsOfQuestioner = async () => {
  const { data } = await instance.get('/questions')
  return data
}

export const getQuestionsOfAnswerer = async (questionId) => {
  const { data } = await instance.get(`/questions/${questionId}`)
  return data
}
