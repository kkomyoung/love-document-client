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

// 질문자 닉네임 조회하기 API
export const getQuetionerNickname = async (questionId) => {
  const { data } = await instance.get(`/questions/${questionId}/nickname`)
  return data
}
