import React, { useState, useCallback, useRef } from 'react'
import ToastPopup from '../components/toast-popup/ToastPopup'

const useToastPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const timeoutRef = useRef(null)

  const openToastPopup = useCallback(
    (message) => {
      setMessage(message)
      setIsOpen(true)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        setIsOpen(false)
      }, 3000)
    },
    [isOpen]
  )

  return {
    message,
    isOpen,
    openToastPopup,
    ToastPopup: useCallback(
      () => <ToastPopup isOpen={isOpen} message={message} />,
      [message, isOpen]
    ),
  }
}

export default useToastPopup
