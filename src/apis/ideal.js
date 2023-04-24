import { instance } from './config'

// 답안 작성하기
export const postIdeals = async (ideal) => {
  const { data } = await instance.post('/ideals', ideal)
  return data
}
