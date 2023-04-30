import { login, register, getUserInfo, postUserOverlap } from './user'
import { getCategories, postQuestions } from './category'
import { postIdeal } from './ideal'
import { postAnswer } from './answer'
import { getQuestionsOfQuestioner, getQuestionsOfAnswerer } from './question'

export {
  // User
  login,
  register,
  getUserInfo,
  postUserOverlap,

  // Category
  getCategories,
  postQuestions,

  // Question
  getQuestionsOfQuestioner,
  getQuestionsOfAnswerer,

  // Ideal
  postIdeal,

  // Answer,
  postAnswer,
}
