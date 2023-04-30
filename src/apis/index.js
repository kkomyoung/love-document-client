import {
  login,
  register,
  getUserInfo,
  postUserOverlap,
  getUsersAnswers,
} from './user'
import { postAnswer } from './answer'
import { getQuestionsOfQuestioner, getQuestionsOfAnswerer } from './question'
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

  // Ideal
  postIdeal,
  getIdeals,

  // Answer,
  postAnswer,
}
