import { instance } from './config'
import { useQuery, useMutation } from 'react-query'

export const fetchGetCategories = async () => {
  const { data } = await instance.get('/categories')
  return data
}

export const useGetCategoriesQuery = () => {
  return useQuery('categories', fetchGetCategories)
}

export const fetchPostQuestions = async (categories) => {
  console.log(categories)
  const { data } = await instance.post('/questions', categories)
  return data
}

export const usePostQuestionsMutation = () => {
  return useMutation(fetchPostQuestions)
}
