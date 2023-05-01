import {
  login,
  register,
  getUserInfo,
  postUserOverlap,
  getUsersAnswers,
} from './user'
import { postAnswer, getAnswerDetail, deleteAnswer } from './answer'
import {
  getQuestionsOfQuestioner,
  getQuestionsOfAnswerer,
  getQuetionerNickname,
} from './question'
import { getCategories, postQuestions, getUsersCategories } from './category'
import { postIdeal, getIdeals } from './ideal'

export {
  // User
  login,
  register,
  getUserInfo,
  postUserOverlap,
  getUsersAnswers,

  // Category
  getCategories,
  postQuestions,
  getUsersCategories,

  // Question
  getQuestionsOfQuestioner,
  getQuestionsOfAnswerer,
  getQuetionerNickname,

  // Ideal
  postIdeal,
  getIdeals,

  // Answer,
  postAnswer,
  getAnswerDetail,
  deleteAnswer,
}
