import { instance } from './config'

// 질문자용 질문지 조회 API
export const getQuestionsOfQuestioner = async () => {
  const { data } = await instance.get('/questions')
  return data
}

// 답변자용 질문지 조회 API
export const getQuestionsOfAnswerer = async (questionId) => {
  const { data } = await instance.get(`/questions/${questionId}`)
  return data
}
