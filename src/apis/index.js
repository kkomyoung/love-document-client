import {
  login,
  register,
  getUserInfo,
  postUserOverlap,
  getUsersAnswers,
  patchNickname,
  postPassword,
  deleteUser,
} from './user'
import { postAnswer, getAnswerDetail, deleteAnswer } from './answer'
import {
  getQuestionsOfQuestioner,
  getQuestionsOfAnswerer,
  getQuetionerNickname,
  getQuestionsCategories,
  patchQuestions,
} from './question'
import { getCategories, postQuestions, getUsersCategories } from './category'
import { postIdeal, getIdeals, patchIdeal } from './ideal'

export {
  // User
  login,
  register,
  getUserInfo,
  postUserOverlap,
  getUsersAnswers,
  patchNickname,
  postPassword,
  deleteUser,

  // Category
  getCategories,
  postQuestions,
  getUsersCategories,

  // Question
  getQuestionsOfQuestioner,
  getQuestionsOfAnswerer,
  getQuetionerNickname,
  getQuestionsCategories,
  patchQuestions,

  // Ideal
  postIdeal,
  getIdeals,
  patchIdeal,

  // Answer,
  postAnswer,
  getAnswerDetail,
  deleteAnswer,
}
