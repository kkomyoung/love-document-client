import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header'
import SelectCategory from './SelectCategory'
import Register from './Register'
import { ButtonArea, RoundButton } from '../../components/buttons/Buttons'
import { TextArea, Title, TextDesc } from '../../components/texts/Texts'
import validateRegister from '../../utils/validateRegister'
// import useModal from '../../hooks/useModal'
// import { useNavigate } from 'react-router-dom'

function Research() {
  // const navigate = useNavigate()
  // const { Modal, open } = useModal()
  // const modalData = {
  //   type: 'alert',
  //   title: '탈퇴하기',
  //   desc: '정말 탈퇴하실 건가요?',
  //   btnCancel: {
  //     text: '아니요',
  //     fn: () => {
  //       console.log(11)
  //       navigate('/home')
  //     },
  //   },
  //   btnConfirm: {
  //     text: '예',
  //     fn: () => {
  //       console.log(22)
  //     },
  //   },
  // }

  const [valueNickname, setValueNickname] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [errorNickname, setErrorNickname] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorMessageNickname, setErrorMessageNickname] = useState('')
  const [errorMessagePassword, setErrorMessagePassword] = useState('')

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
      console.log('로그인')
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
        <ButtonArea margin="8.3rem 0 0">
          <RoundButton size="large" text="완료" onClick={handlerLogin} />
        </ButtonArea>
      </article>
      {/* <Modal /> */}
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
`

export default Research
