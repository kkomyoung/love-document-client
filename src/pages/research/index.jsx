import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header'
import SelectCategory from './SelectCategory'
import Register from './Register'
import { ButtonArea, RoundButton } from '../../components/buttons/Buttons'
import { TextArea, Title, TextDesc } from '../../components/texts/Texts'
import validateRegister from '../../utils/validateRegister'
import useModal from '../../hooks/useModal'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../../apis'

function Research() {
  const navigate = useNavigate()
  const { Modal, open } = useModal()
  const { mutate, isLoading, error } = useRegisterMutation()
  const [msg, setMsg] = useState('')
  const [valueNickname, setValueNickname] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [errorNickname, setErrorNickname] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorMessageNickname, setErrorMessageNickname] = useState('')
  const [errorMessagePassword, setErrorMessagePassword] = useState('')

  const register = () => {
    mutate(
      { nickname: valueNickname, password: valuePassword },
      {
        onSuccess: () => {
          console.log('회원가입 성공!!!!')
          navigate('/research/ready')
        },
        onError: (err) => {
          if (err.request.status === 409) {
            setMsg('중복된 아이디 입니다.')
          }
        },
      }
    )
  }

  const modalData = {
    type: 'alert',
    title: '질문지 닉네임과 비밀번호를 꼭 기억해주세요',
    btnCancel: {
      text: '다시 보러갈래요',
    },
    btnConfirm: {
      text: '알겠어요',
      fn: () => {
        register()
      },
    },
  }
  const handlerLogin = (e) => {
    e.preventDefault()
    const isValid = validateRegister(
      valueNickname,
      valuePassword,
      setErrorNickname,
      setErrorPassword,
      setErrorMessageNickname,
      setErrorMessagePassword
    )

    if (isValid) {
      open(modalData)
    }
  }

  const handleNicknameChange = (e) => {
    setValueNickname(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setValuePassword(e.target.value)
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
        <SelectCategory />
        <Register
          valueNickname={valueNickname}
          valuePassword={valuePassword}
          errorNickname={errorNickname}
          errorPassword={errorPassword}
          errorMessageNickname={errorMessageNickname}
          errorMessagePassword={errorMessagePassword}
          handleNicknameChange={handleNicknameChange}
          handlePasswordChange={handlePasswordChange}
        />
        {error && <Title>{msg}</Title>}
        <ButtonArea margin="8.3rem 0 0">
          <RoundButton
            size="large"
            text={isLoading ? 'Loding...' : '완료'}
            onClick={handlerLogin}
          />
        </ButtonArea>
      </article>
      <Modal />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
`

export default Research
