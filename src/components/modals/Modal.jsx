import React from 'react'
import styled from 'styled-components'
import { ButtonArea, RoundButton } from '../buttons/Buttons'

const Modal = (props) => {
  return (
    <StyledModal>
      <div className="popup">
        <h3>뒤로가기</h3>
        <p>질문지 작성 페이지로 돌아갈까요?</p>
        <ButtonArea type="full">
          <RoundButton color="white" text="아니요"></RoundButton>
          <RoundButton text="확인"></RoundButton>
        </ButtonArea>
      </div>
    </StyledModal>
  )
}

const StyledModal = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.4rem;

  .popup {
    background: #fff;
    width: 100%;
    padding: 3.6rem 1.6rem 3.2rem;
    border-radius: 1.6rem;
    text-align: center;
  }
`

export default Modal
