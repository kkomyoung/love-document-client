import React, { useState, useCallback } from 'react'
import Modal from '../components/modals/Modal'

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalData, setModalData] = useState(null)

  // 모달 열기
  const open = useCallback((data) => {
    document.body.style.overflow = 'hidden'
    setModalData(data)
    setIsOpen(() => true)
  }, [])

  // 모달 닫기
  const close = useCallback((callback = null) => {
    document.body.style.overflow = ''
    if (typeof callback === 'function') {
      callback()
    }
    setIsOpen(() => false)
  }, [])

  return {
    Modal: isOpen
      ? () => <Modal modalData={modalData} close={close} />
      : () => null,
    open,
    close,
  }
}

export default useModal
