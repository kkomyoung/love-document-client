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

// 유저 카테고리 목록 조회하기 API
export const getQuestionsCategories = async () => {
  const { data } = await instance.get('/questions/categories')
  return data
}

// 유저 질문지 수정 API
export const patchQuestions = async (categoryItems) => {
  const { data } = await instance.patch('/questions', categoryItems)
  return data
}
