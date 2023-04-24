import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header'
import SelectCategory from './SelectCategory'
import Register from './Register'
import { ButtonArea, RoundButton } from '../../components/buttons/Buttons'
import { TextArea, Title, TextDesc } from '../../components/texts/Texts'
import { validateNickname, validatePassword } from '../../utils/validate'
import useModal from '../../hooks/useModal'
import useToastPopup from '../../hooks/useToastPopup'
import { useNavigate } from 'react-router-dom'
import { register, postQuestions } from '../../apis'
import { useMutation } from 'react-query'
import Loading from '../../components/loading/Loading'

const Research = () => {
  const navigate = useNavigate()
  const { Modal, openModal } = useModal()
  const { ToastPopup, openToastPopup } = useToastPopup()
  const [valueNickname, setValueNickname] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [errorNickname, setErrorNickname] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorMessageNickname, setErrorMessageNickname] = useState('')
  const [errorMessagePassword, setErrorMessagePassword] = useState('')
  const [resultOptions, setResultOptions] = useState({ categoryItems: [] })
  const formRef = useRef()

  useEffect(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('nickname')
  }, [])

  // 카테고리 목록
  const { mutate: postQuestionsMutate } = useMutation(postQuestions, {
    onSuccess: () => navigate('/research/ready'),
  })

  // 회원가입
  const { mutate: registerMutate, isLoading: registerIsLoading } = useMutation(
    register,
    {
      onSuccess: (data) => {
        localStorage.setItem('nickname', data.nickname)
        localStorage.setItem('token', data.token)
        postQuestionsMutate(resultOptions)
      },
    }
  )

  const submitForm = () => {
    const checkedOptions = Array.from(
      formRef.current.querySelectorAll('input[type="checkbox"]')
    )
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.id)
    setResultOptions({ categoryItems: [...checkedOptions] })
  }

  const handlerValidate = async (e) => {
    e.preventDefault()

    const nicknameValid = await validateNickname(
      valueNickname,
      setErrorNickname,
      setErrorMessageNickname,
      openToastPopup
    )

    const passwordValid = validatePassword(
      valuePassword,
      setErrorPassword,
      setErrorMessagePassword
    )

    if (resultOptions.categoryItems.length < 1) {
      openToastPopup('1개 이상의 항목을 선택해주세요')
      return
    }

    if (nicknameValid && passwordValid) {
      openModal({
        type: 'alert',
        title: '질문지 닉네임과 비밀번호를 꼭 기억해주세요',
        btnCancel: {
          text: '다시 보러갈래요',
        },
        btnConfirm: {
          text: '알겠어요',
          fn: () => {
            registerMutate({
              nickname: valueNickname,
              password: valuePassword,
            })
          },
        },
      })
    }
  }

  return (
    <StyledMain>
      {registerIsLoading && <Loading text="질문지 저장중" />}
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
