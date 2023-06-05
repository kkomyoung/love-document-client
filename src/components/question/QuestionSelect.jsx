import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { QUESTION_TYPE, SELECT_OPTIONS } from '../../utils/constants'
import { useSetRecoilState } from 'recoil'
import { answerAtom } from '../../utils/atoms'

function QuestionSelect({ questionId, name, dataType }) {
  const [value, setValue] = useState('')
  const setAnswer = useSetRecoilState(answerAtom)

  const handleSelect = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (questionId === 0 && name === 'age') {
      setAnswer((prev) => ({ ...prev, [name]: value }))
    } else {
      setAnswer((prev) => ({
        ...prev,
        answerList: [
          ...prev.answerList.filter(
            (answer) => answer.categoryItemId !== questionId
          ),
          {
            categoryItemId: questionId,
            questionType: QUESTION_TYPE.INPUT,
            rangeList: [+value],
            yn: null,
            score: null,
            choiceIdList: null,
          },
        ],
      }))
    }
  }, [value])

  return (
    <Select onChange={handleSelect} value={value}>
      <Option value="" disabled selected hidden>
        {dataType}
      </Option>
      {SELECT_OPTIONS[dataType].map((item, index) => (
        <Option value={item} key={index}>
          {item}
        </Option>
      ))}
    </Select>
  )
}

export default QuestionSelect

const Select = styled.select`
  display: flex;
  height: 4.8rem;
  width: 100%;
  border: 1px solid ${(props) => props.theme.gray500};
  border-radius: 0.8rem;
  padding: 0 1.2rem;
  overflow: hidden;
  outline: none;
  font-size: 1.6rem;
  background-color: ${(props) => props.theme.white};
  ${(props) => props.theme.fontSize.lable_m_m}
  color: ${(props) =>
    props.value === '' ? props.theme.gray400 : props.theme.gray900};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    border: 1px solid ${(props) => props.theme.pink700};
  }
`

const Option = styled.option``
