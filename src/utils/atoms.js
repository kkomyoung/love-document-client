import { atom } from 'recoil'

export const answerAtom = atom({
  key: 'answer',
  default: {
    questionId: null,
    nickname: null,
    age: null,
    work: null,
    live: null,
    answerList: [],
  },
})
