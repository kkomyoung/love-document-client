import {
  login,
  register,
  getUserInfo,
  postUserOverlap,
  getUsersAnswers,
} from './user'
import { getCategories, postQuestions, getUsersCategories } from './category'
import { postIdeals, getIdeals } from './ideal'

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

  // Ideal
  postIdeals,
  getIdeals,
}

