import React from 'react'
import { StyledModal } from './ModalStyle'
import ModalAlert from './ModalAlert'
import ModalShare from './ModalShare'
import PopupPortal from '../../portal'

const Modal = ({ close, modalData }) => {
  return (
    <PopupPortal>
      <StyledModal>
        <div className="modal">
          {modalData.type === 'alert' && (
            <ModalAlert close={close} modalData={modalData} />
          )}
          {modalData.type === 'share' && (
            <ModalShare close={close} modalData={modalData} />
          )}
        </div>
      </StyledModal>
    </PopupPortal>
  )
}

export default Modal
