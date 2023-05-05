/* eslint-disable no-unused-vars */
import { QUESTION_TYPE } from '../utils/constants'

export default function useQuestionNumber(initLength) {
  let totalQuestionLength = initLength

  const getQuestionNumberOffset = (curQuestionLength) => {
    totalQuestionLength += curQuestionLength // 카테고리별로 question list 의 길이를 저장. 다음 카테고리 question 시작번호에 쓰임
    return totalQuestionLength - curQuestionLength // 현재 카테고리의 question 시작 번호 반환
  }

  const isNotAllAnswered = (type, answer) => {
    if (type === 'answer') {
      if (!answer.nickname || !answer.age || !answer.live || !answer.work) {
        return true
      }
      if (totalQuestionLength - 4 !== answer.answerList.length) {
        return true
      }
    } else if (type === 'ideal') {
      if (totalQuestionLength !== answer.answerList.length) {
        return true
      }
    }

    return false
  }

  const isSameAnswered = (answereds, answers) => {
    const result = answereds.filter((answered) => {
      let flag = false
      const answer = answers.find(
        (item) => item.categoryItemId === answered.categoryItemId
      )
      if (!answer) return flag

      switch (answer.questionType) {
        case QUESTION_TYPE.RANGE:
          flag =
            answer.rangeList[0] === answered.rangeList[0] &&
            answer.rangeList[1] === answered.rangeList[1]
          break
        case QUESTION_TYPE.CHOICE:
          flag =
            JSON.stringify(answer.choiceIdList) ===
            JSON.stringify(answered.choiceIdList)
          break
        case QUESTION_TYPE.SCORE:
          flag = answer.score === answered.score
          break
        case QUESTION_TYPE.YN:
          flag = answer.yn === answered.yn
          break
      }

      return flag
    })

    return result.length === answers.length
  }

  return { getQuestionNumberOffset, isNotAllAnswered, isSameAnswered }
}
