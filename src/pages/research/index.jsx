import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header'
import SelectCategory from './SelectCategory'
import Register from './Register'
import { ButtonArea, RoundButton } from '../../components/buttons/Buttons'
import { TextArea, Title, TextDesc } from '../../components/texts/Texts'
import { validateRegister } from '../../utils/validate'
import useModal from '../../hooks/useModal'
import useToastPopup from '../../hooks/useToastPopup'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation, usePostQuestionsMutation } from '../../apis'

const Research = () => {
  const navigate = useNavigate()
  const { Modal, openModal } = useModal()
  const { ToastPopup, openToastPopup } = useToastPopup()
  const { mutate: register } = useRegisterMutation()
  const { mutate: postQuestions } = usePostQuestionsMutation()
  const [valueNickname, setValueNickname] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [errorNickname, setErrorNickname] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorMessageNickname, setErrorMessageNickname] = useState('')
  const [errorMessagePassword, setErrorMessagePassword] = useState('')
  const [resultOptions, setResultOptions] = useState([])
  const formRef = useRef()

  const modalData = {
    type: 'alert',
    title: '질문지 닉네임과 비밀번호를 꼭 기억해주세요',
    btnCancel: {
      text: '다시 보러갈래요',
    },
    btnConfirm: {
      text: '알겠어요',
      fn: () => {
        handlerRegister()
      },
    },
  }

  const handlerRegister = () => {
    register(
      { nickname: valueNickname, password: valuePassword },
      {
        onSuccess: (data) => {
          localStorage.setItem('nickname', data.nickname)
          localStorage.setItem('token', data.token)
          postQuestions(resultOptions, {
            onSuccess: () => navigate('/research/ready'),
          })
        },
        onError: (err) => {
          if (err.request.status === 409) {
            openToastPopup('중복된 닉네임이에요')
          }
        },
      }
    )
  }

  const handlerValidate = (e) => {
    e.preventDefault()
    const isValid = validateRegister(
      valueNickname,
      valuePassword,
      setErrorNickname,
      setErrorPassword,
      setErrorMessageNickname,
      setErrorMessagePassword
    )
    if (resultOptions.length < 1) {
      openToastPopup('1개 이상의 항목을 선택해주세요')
      return
    }

    if (isValid) {
      openModal(modalData)
    }
  }

  const submitForm = () => {
    const checkedOptions = Array.from(
      formRef.current.querySelectorAll('input[type="checkbox"]')
    )
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => ({ id: checkbox.id }))
    setResultOptions(checkedOptions)
  }
  return (
    <StyledMain>
      <Header title="질문지 만들기" btnBack />
      <article>
        <TextArea>
          <Title>질문지 만들기</Title>
          <TextDesc>
            <span>내 애인후보... 이것만큼은..절대지켜!!</span>
            <br />
            <span>상대방에 대해 알고싶은 카테고리를 선택해주세요</span>
          </TextDesc>
        </TextArea>
        <SelectCategory formRef={formRef} onChange={submitForm} />
        <Register
          valueNickname={valueNickname}
          valuePassword={valuePassword}
          errorNickname={errorNickname}
          errorPassword={errorPassword}
          errorMessageNickname={errorMessageNickname}
          errorMessagePassword={errorMessagePassword}
          handlerNicknameChange={(e) => setValueNickname(e.target.value)}
          handlerPasswordChange={(e) => setValuePassword(e.target.value)}
        />
        <ButtonArea margin="8.3rem 0 0">
          <RoundButton size="large" text="완료" onClick={handlerValidate} />
        </ButtonArea>
      </article>
      <Modal />
      <ToastPopup />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 10rem;
`

export default Research
