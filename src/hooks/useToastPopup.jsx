import React, { useState, useCallback } from 'react'
import ToastPopup from '../components/toast-popup/ToastPopup'

const useToastPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [animation, setAnimation] = useState('')

  const openToastPopup = useCallback((message) => {
    setMessage(message)
    setIsOpen(true)
    setAnimation('fadeIn')

    setTimeout(() => {
      setAnimation('fadeOut')
      setTimeout(() => setIsOpen(false), 500)
    }, 3000)
  }, [])

  return {
    ToastPopup: isOpen
      ? () => <ToastPopup message={message} className={animation} />
      : () => null,
    openToastPopup,
  }
}

export default useToastPopup
