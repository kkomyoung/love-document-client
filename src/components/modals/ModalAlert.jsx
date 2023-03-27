import React from 'react'
import { RoundButton } from '../buttons/Buttons'
import { StyledButtonWrap } from './ModalStyle'

// 확인, 취소 버튼이 있는 모달
const ModalAlert = ({
  close,
  modalData: { title, desc, btnCancel, btnConfirm },
}) => {
  const buttonAlign = btnCancel ? 'full' : ''

  return (
    <div className="inner">
      <h3>{title}</h3>
      <p>{desc}</p>
      <StyledButtonWrap type={buttonAlign}>
        {btnCancel && (
          <RoundButton
            color="white"
            text={btnCancel.text}
            onClick={() => close(btnCancel.fn)}
          ></RoundButton>
        )}
        {btnConfirm && (
          <RoundButton
            text={btnConfirm.text}
            onClick={() => close(btnConfirm.fn)}
          ></RoundButton>
        )}
      </StyledButtonWrap>
    </div>
  )
}

export default ModalAlert
