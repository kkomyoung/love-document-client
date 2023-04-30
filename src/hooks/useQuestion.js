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

  return { getQuestionNumberOffset, isNotAllAnswered }
}
