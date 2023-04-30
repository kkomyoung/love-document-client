import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ReactComponent as IconUser } from '../../assets/icon_user.svg'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'
import { answerAtom } from '../../utils/atoms'
import { QUESTION_TYPE } from '../../utils/constants'

function QuestionInput({ questionId, name, type, placeholder }) {
  const { register, watch } = useForm()
  const setAnswer = useSetRecoilState(answerAtom)
  const inputWatcher = watch(name)

  useEffect(() => {
    if (inputWatcher && inputWatcher.length > 0) {
      if (
        name === 'nickname' ||
        name === 'age' ||
        name === 'live' ||
        name === 'work'
      ) {
        setAnswer((prev) => ({ ...prev, [name]: inputWatcher }))
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
              rangeList: [+inputWatcher],
              yn: null,
              score: null,
              choiceIdList: null,
            },
          ],
        }))
      }
    } else {
      if (
        name === 'nickname' ||
        name === 'age' ||
        name === 'live' ||
        name === 'work'
      ) {
        setAnswer((prev) => ({ ...prev, [name]: null }))
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
    }
  }, [inputWatcher])

  return (
    <Box>
      {name === 'nickname' && (
        <i aria-hidden="true">
          <IconUser />
        </i>
      )}
      <input {...register(name)} type={type} placeholder={placeholder} />
    </Box>
  )
}

export default QuestionInput

const Box = styled.div`
  display: flex;
  border: 1px solid
    ${(props) => (props.error ? props.theme.pink700 : props.theme.gray500)};
  border-radius: 0.8rem;
  overflow: hidden;
  height: 4.8rem;
  /* margin-top: 2rem; */

  input {
    font-size: 1.6rem;
    flex-grow: 1;
    height: 100%;
    border: none;
    padding: 0 1.2rem;
    ${(props) => props.theme.fontSize.lable_m_m}
    color: ${(props) => props.theme.gray900};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme.gray400};
    }
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1.2rem;
    width: 2.4rem;
    background-color: ${(props) => props.theme.bgColor};

    svg {
      fill: ${(props) => props.theme.gray500};
    }
  }
`
