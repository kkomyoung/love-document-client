import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { TextArea, Title } from '../components/texts/Texts'
import useModal from '../hooks/useModal'

const Setting = () => {
  const navigate = useNavigate()
  const { Modal, openModal } = useModal()

  const modalData = {
    type: 'alert',
    title: '로그아웃',
    desc: '정말 로그아웃하실 건가요?',
    btnCancel: {
      text: '아니요',
    },
    btnConfirm: {
      text: '네',
      fn: () => {
        console.log('로그아웃')
        navigate('/')
      },
    },
  }

  return (
    <StyledMain>
      <Header title="설정" btnHome />
      <article>
        <TextArea>
          <Title>설정</Title>
        </TextArea>
        <StyledMenuWrap>
          <ul className="inner">
            <ButtonArea full>
              <RoundButton
                as={Link}
                to="/setting/modify"
                text="내 정보 수정"
                color="white"
                border="true"
              />
              <RoundButton text="이메일 문의" color="white" border="true" />
              <RoundButton
                as={Link}
                to="/setting/unregister"
                text="회원 탈퇴"
                color="white"
                border="true"
              />
              <RoundButton
                text="로그아웃"
                color="white"
                border="true"
                onClick={() => openModal(modalData)}
              />
            </ButtonArea>
          </ul>
        </StyledMenuWrap>
      </article>
      <Modal />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 15rem;
`
const StyledMenuWrap = styled.section`
  margin-top: 2.8rem;
  padding: 0 2rem;

  .inner {
    padding: 2rem;
    border-radius: 0.8rem;
    background: ${(props) => props.theme.gray100};
  }
`

export default Setting
