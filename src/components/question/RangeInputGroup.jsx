import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useSetRecoilState } from 'recoil'
import { answerAtom } from '../../utils/atoms'

function RangeInputGroup({ questionId, questionType, answeredRange }) {
  const { register, watch, setValue } = useForm()
  const setAnswer = useSetRecoilState(answerAtom)
  const minimum = watch('minimum')
  const maximum = watch('maximum')

  const handleInput = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
  }

  useEffect(() => {
    if (answeredRange) {
      setValue('minimum', answeredRange[0].toString())
      setValue('maximum', answeredRange[1].toString())
    }
  }, [answeredRange, setValue])

  useEffect(() => {
    if (minimum && minimum.length > 0 && maximum && maximum.length > 0) {
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
    } else {
      setAnswer((prev) => ({
        ...prev,
        answerList: [
          ...prev.answerList.filter(
            (answer) => answer.categoryItemId !== questionId
          ),
        ],
      }))
    }
  }, [minimum, maximum])

  return (
    <Form>
      <Input
        type="number"
        onInput={handleInput}
        maxLength={3}
        {...register('minimum', { required: true, maxLength: 3, minLength: 3 })}
      />
      <span>이상</span>
      <Input
        type="number"
        onInput={handleInput}
        maxLength={3}
        {...register('maximum', { required: true, maxLength: 3, minLength: 3 })}
      />
      <span>이하</span>
    </Form>
  )
}

export default RangeInputGroup

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    margin-right: 0.8rem;
  }

  span {
    margin-right: 1.2rem;
    ${(props) => props.theme.fontSize.label_m_m}
    color: ${(props) => props.theme.gray800}
  }
`

const Input = styled.input`
  display: flex;
  width: 8rem;
  height: 4.8rem;
  text-align: center;
  border: 1px solid ${(props) => props.theme.gray500};
  border-radius: 0.8rem;
  overflow: hidden;
  color: ${(props) => props.theme.gray900};
  ${(props) => props.theme.fontSize.label_m_m}

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.pink700};
  }

  &::placeholder {
    color: ${(props) => props.theme.gray400};
  }
`
