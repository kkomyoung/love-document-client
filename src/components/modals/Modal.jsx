import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RoundButton } from '../buttons/Buttons'

const Modal = ({ setOpenModal, title, text, btnConfirm, btnCancle }) => {
  document.body.style.overflow = 'hidden'
  const buttonType = btnCancle ? 'full' : ''

  const closeModal = () => {
    setOpenModal(false)
    document.body.style.overflow = ''
    window.scrollTo(0, 0)
  }

  return (
    <StyledModal>
      <div className="modal">
        <div className="inner">
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
              <RoundButton
                as={Link}
                to="/research/ready"
                text={btnConfirm}
                onClick={closeModal}
              ></RoundButton>
            )}
          </StyledButtonWrap>
        </div>
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
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.4rem;

  .modal {
    background: #fff;
    width: 100%;
    border-radius: 1.6rem;
    text-align: center;

    .inner {
      padding: 3.6rem 1.6rem 3.2rem;
    }
  }

  h3 {
    ${(props) => props.theme.fontSize.h3_m}
  }

  p {
    margin-top: 1.6rem;
    ${(props) => props.theme.fontSize.b1}
  }

  @media (min-width: 500px) {
    .modal {
      max-width: calc(360px - 4rem);
    }
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
