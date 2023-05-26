import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { TextArea, Title, TextDesc } from '../components/texts/Texts'
import LoginInput from '../components/form/LoginInput'
import { validateNickname } from '../utils/validate'
import { useMutation } from 'react-query'
import { patchNickname } from '../apis'
import useModal from '../hooks/useModal'
import { useNavigate } from 'react-router-dom'

const ModifyNickname = () => {
  const navigate = useNavigate()
  const { Modal, openModal, closeModal } = useModal()
  const [nickname, setNickname] = useState(localStorage.getItem('nickname'))
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { mutate } = useMutation(patchNickname, {
    onSuccess: (data) => {
      localStorage.setItem('nickname', data.nickname)
      localStorage.setItem('token', data.token)
      navigate('/setting/modify')
    },
  })

  const handlerModify = async () => {
    const nicknameValid = await validateNickname(
      nickname,
      setError,
      setErrorMessage
    )

    if (nicknameValid) {
      openModal({
        type: 'alert',
        title: '닉네임 변경',
        desc: '닉네임을 변경하시겠어요?',
        btnCancel: {
          text: '아니요',
          fn: () => {
            closeModal()
          },
        },
        btnConfirm: {
          text: '네',
          fn: () => {
            mutate({ nickname })
          },
        },
      })
    }
  }

  return (
    <StyledMain>
      <Header title="닉네임 변경" btnBack />
      <article>
        <TextArea>
          <Title>닉네임 변경</Title>
          <TextDesc>질문지 확인용 닉네임 변경</TextDesc>
        </TextArea>
        <StyledInputWrap>
          <LoginInput
            type="text"
            name="nickname"
            placeholder="새 닉네임 입력"
            value={nickname}
            error={error}
            errorMessage={errorMessage}
            onChange={(e) => setNickname(e.target.value)}
          />
        </StyledInputWrap>
        <StyledFixedArea>
          <ButtonArea margin="11rem 0 0 0">
            <RoundButton size="large" text="저장" onClick={handlerModify} />
          </ButtonArea>
        </StyledFixedArea>
      </article>
      <Modal />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 9rem;

  @media (min-width: 500px) {
    height: 100%;
    /* min-height: calc(100vh - 9rem - 8.4rem); */
    padding-bottom: 0;
  }
`

const StyledInputWrap = styled.div`
  margin-top: 2.8rem;
  padding: 0 2.4rem;
`

const StyledFixedArea = styled.div`
  position: absolute;
  left: 50%;
  bottom: 4.8rem;
  transform: translateX(-50%);
`
export default ModifyNickname
