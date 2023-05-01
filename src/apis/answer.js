import { instance } from './config'

// 답변자의 답변 작성하기
export const postAnswer = async (answer) => {
  const { data } = await instance.post('/answers', answer)
  return data
}

// 답변 상세 조회하기
export const getAnswerDetail = async (answerId) => {
  const { data } = await instance.get(`/answers/${answerId}`)
  return data
}
