import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { SELECT_OPTIONS } from '../../utils/constants'
import { useSetRecoilState } from 'recoil'
import { answerAtom } from '../../utils/atoms'

function RangeSelectGroup({
  questionId,
  questionType,
  answeredRange,
  dataType,
}) {
  const [minimum, setMinimum] = useState('')
  const [maximum, setMaximum] = useState('')
  const setAnswer = useSetRecoilState(answerAtom)

  const handleSelect = (e) => {
    if (e.target.name === 'minimum') {
      if (maximum !== '' && +e.target.value >= maximum) return
      setMinimum(e.target.value)
    } else {
      if (minimum !== '' && +e.target.value <= minimum) return
      setMaximum(e.target.value)
    }
  }

  useEffect(() => {
    if (answeredRange) {
      setMinimum(answeredRange[0].toString())
      setMaximum(answeredRange[1].toString())
    }
  }, [answeredRange])

  useEffect(() => {
    if (minimum === '' || maximum === '') return

    setAnswer((prev) => ({
      ...prev,
      answerList: [
        ...prev.answerList.filter(
          (answer) => answer.categoryItemId !== questionId
        ),
        {
          categoryItemId: questionId,
          questionType,
          rangeList: [+minimum, +maximum],
          yn: null,
          score: null,
          choiceIdList: null,
        },
      ],
    }))
  }, [minimum, maximum])

  return (
    <Box>
      <Select name={'minimum'} onChange={handleSelect} value={minimum}>
        <Option value="" disabled selected hidden />
        {SELECT_OPTIONS[dataType].map((item, index) => (
          <Option value={item} key={index}>
            {item}
          </Option>
        ))}
      </Select>

      <span>이상</span>

      <Select name={'maximum'} onChange={handleSelect} value={maximum}>
        <Option value="" disabled selected hidden />
        {SELECT_OPTIONS[dataType].map((item, index) => (
          <Option value={item} key={index}>
            {item}
          </Option>
        ))}
      </Select>

      <span>이하</span>
    </Box>
  )
}

export default RangeSelectGroup

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  select {
    margin-right: 0.8rem;
  }

  span {
    margin-right: 1.2rem;
    ${(props) => props.theme.fontSize.label_m_m}
    color: ${(props) => props.theme.gray800}
  }
`

const Select = styled.select`
  width: 8rem;
  height: 4.8rem;
  font-size: 1.6rem;
  flex-grow: 1;
  border-radius: 0.8rem;
  border: 1px solid ${(props) => props.theme.gray500};
  overflow: hidden;
  padding: 0 1.2rem;
  outline: none;
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
