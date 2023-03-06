import React from 'react'
import styled from 'styled-components'
import { RoundButton } from '../buttons/Buttons'

const Modal = ({ setOpenModal, title, text, btnConfirm, btnCancle }) => {
  document.body.style.overflow = 'hidden'
  const buttonType = btnCancle ? 'full' : ''

  const closeModal = () => {
    setOpenModal(false)
    document.body.style.overflow = ''
  }

  return (
    <StyledModal>
      <div className="modal">
        {title && <h3>{title}</h3>}
        {text && <p>{text}</p>}
        <StyledButtonWrap type={buttonType}>
          {btnCancle && (
            <RoundButton
              color="white"
              text={btnCancle}
              onClick={closeModal}
            ></RoundButton>
          )}
          {btnConfirm && (
            <RoundButton text={btnConfirm} onClick={closeModal}></RoundButton>
          )}
        </StyledButtonWrap>
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

  .modal {
    background: #fff;
    width: 100%;
    padding: 3.6rem 1.6rem 3.2rem;
    border-radius: 1.6rem;
    text-align: center;
  }

  h3 {
    ${(props) => props.theme.fontSize.h3_m}
  }

  p {
    margin-top: 1.6rem;
    ${(props) => props.theme.fontSize.b1}
  }
`

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;

  button + button {
    margin-left: 0.8rem;
  }

  ${(props) => {
    if (props.type === 'full') {
      return `
        button {flex: 1}
      `
    }
  }}
`

export { Modal }
