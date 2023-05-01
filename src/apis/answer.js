import { instance } from './config'

// 답변자의 답변 작성하기 API
export const postAnswer = async (answer) => {
  const { data } = await instance.post('/answers', answer)
  return data
}

// 답변 상세 조회하기 API
export const getAnswerDetail = async (answerId) => {
  const { data } = await instance.get(`/answers/${answerId}`)
  return data
}

// 답변 삭제하기 API
export const deleteAnswer = async (answerId) => {
  const { data } = await instance.delete(`/answers/${answerId}`)
  return data
}
