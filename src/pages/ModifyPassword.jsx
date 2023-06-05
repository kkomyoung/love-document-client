import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { TextArea, Title, TextDesc } from '../components/texts/Texts'
import LoginInput from '../components/form/LoginInput'
import { useMutation } from 'react-query'
import { patchPassword, postPassword } from '../apis'
import { validateNewPassword } from '../utils/validate'
import useModal from '../hooks/useModal'
import { useNavigate } from 'react-router-dom'

const ModifyPassword = () => {
  const navigate = useNavigate()
  const { Modal, openModal, closeModal } = useModal()
  const [nowPassword, setNowPassword] = useState('')
  const [nowError, setNowError] = useState(false)
  const [nowErrorMessage, setNowErrorMessage] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newError, setNewError] = useState(false)
  const [newErrorMessage, setNewErrorMessage] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmError, setConfirmError] = useState(false)
  const [confirmErrorMessage, setConfirmErrorMessage] = useState('')

  // 현재 비밀번호 확인
  const { mutate: postPasswordMutate } = useMutation(postPassword, {
    onSuccess: () => {
      setNowError(false)
      setNowErrorMessage('')

      if (nowPassword === newPassword) {
        setNewError(true)
        setConfirmError(true)
        setConfirmErrorMessage('현재 비밀번호와 동일합니다')
      } else if (newPassword === confirmPassword) {
        openModal({
          type: 'alert',
          title: '비밀번호 변경',
          desc: '비밀번호를 변경하시겠어요?',
          btnCancel: {
            text: '아니요',
            fn: () => {
              closeModal()
            },
          },
          btnConfirm: {
            text: '네',
            fn: () => {
              patchPasswordMutate({
                password: newPassword,
                checkedPassword: confirmPassword,
              })
            },
          },
        })
      }
    },
    onError: () => {
      setNowError(true)
      setNowErrorMessage('현재 비밀번호가 일치하지 않습니다')
      handlerNewPassword()
    },
  })

  // 비밀번호 변경
  const { mutate: patchPasswordMutate } = useMutation(patchPassword, {
    onSuccess: () => {
      navigate(-1)
    },
  })

  // 새 비밀번호 벨리데이션 체크
  const handlerNewPassword = () => {
    const newPasswordValid = validateNewPassword(
      newPassword,
      setNewError,
      setNewErrorMessage,
      confirmPassword,
      setConfirmError,
      setConfirmErrorMessage
    )

    if (newPasswordValid) {
      if (newPassword !== confirmPassword) {
        setNewError(true)
        setConfirmError(true)
        setConfirmErrorMessage('새 비밀번호가 일치하지 않습니다')
      } else {
        setNewError(false)
        setConfirmError(false)
      }
    }
  }

  const handlerSubmit = () => {
    if (nowPassword === '') {
      setNowError(true)
      setNowErrorMessage('현재 비밀번호를 입력해주세요')
    } else {
      setNowError(false)
      postPasswordMutate({
        nowPassword,
      })
    }
    handlerNewPassword()
  }

  return (
    <StyledMain>
      <Header title="비밀번호 변경" btnBack />
      <article>
        <TextArea>
          <Title>비밀번호 변경</Title>
          <TextDesc>질문지 확인용 비밀번호를 변경</TextDesc>
        </TextArea>
        <StyledInputWrap>
          <LoginInput
            type="password"
            name="password"
            placeholder="현재 비밀번호 입력"
            error={nowError}
            errorMessage={nowErrorMessage}
            value={nowPassword}
            onChange={(e) => setNowPassword(e.target.value)}
          />

          <LoginInput
            type="password"
            name="password"
            placeholder="새 비밀번호 입력"
            error={newError}
            errorMessage={newErrorMessage}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <LoginInput
            type="password"
            name="password"
            placeholder="새 비밀번호 확인"
            error={confirmError}
            errorMessage={confirmErrorMessage}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </StyledInputWrap>
        <StyledFixedArea>
          <ButtonArea margin="11rem 0 0 0">
            <RoundButton size="large" text="저장" onClick={handlerSubmit} />
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
export default ModifyPassword
