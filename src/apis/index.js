import { login, register, getUserInfo, postUserOverlap } from './user'
import { getCategories, postQuestions } from './category'
import { postIdeals } from './ideal'
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

  // Ideal
  postIdeals,

  // Question
  getQuestionsOfQuestioner,
  getQuestionsOfAnswerer,
}
