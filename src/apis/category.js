import { instance } from './config'

export const getCategories = async () => {
  const { data } = await instance.get('/categories')
  return data
}
export const postQuestions = async (categories) => {
  const { data } = await instance.post('/questions', categories)
  return data
}
