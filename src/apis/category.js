import { instance } from './config'

export const getCategories = async () => {
  try {
    const { data } = await instance.get('/categories')
    return data
  } catch (error) {
    console.log(error)
  }
}
