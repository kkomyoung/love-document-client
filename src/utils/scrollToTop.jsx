import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  const prevPathnameRef = useRef()
  const isDesktop = window.innerWidth >= 500

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      isDesktop
        ? document.querySelector('#wrap').scrollTo(0, 0)
        : window.scrollTo(0, 0)
      prevPathnameRef.current = pathname
    }
  }, [pathname])

  return null
}

export default ScrollToTop
