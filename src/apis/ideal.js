import { instance } from './config'

// 질문자의 답안 작성하기 API
export const postIdeal = async (ideal) => {
  const { data } = await instance.post('/ideals', ideal)
  return data
}

// 내 기준 답안 조회하기 API
export const getIdeals = async () => {
  const { data } = await instance.get('/ideals')
  return data
}

// 내 기준 수정하기 API
export const patchIdeal = async (ideal) => {
  const { data } = await instance.patch('/ideals', ideal)
  return data
}
