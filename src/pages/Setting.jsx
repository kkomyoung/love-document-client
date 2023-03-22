import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { Modal } from '../components/modals/Modal'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { TextArea, Title } from '../components/texts/Texts'

function Setting() {
  const [openModal, setOpenModal] = useState(false)

  const showModal = () => {
    setOpenModal(true)
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
                border
              />
              <RoundButton text="이메일 문의" color="white" border />
              <RoundButton text="회원 탈퇴" color="white" border />
              <RoundButton
                text="로그아웃"
                color="white"
                border
                onClick={showModal}
              />
            </ButtonArea>
          </ul>
        </StyledMenuWrap>
      </article>
      {openModal && (
        <Modal
          title="로그아웃"
          text="정말 로그아웃하실 건가요?"
          btnCancle="아니요"
          btnConfirm="네"
          setOpenModal={setOpenModal}
        />
      )}
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
