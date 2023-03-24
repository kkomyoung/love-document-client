import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  const prevPathnameRef = useRef()
  const isDesktop = window.innerWidth >= 500

  // 모바일 사이즈에서 스크롤 한 뒤, 데스크탑 사이즈로 리사이즈 했을 시 wrap 영역이 상단으로 올라가는 것을 막기 위해 추가
  const handleResize = () => {
    const isDesktop = window.innerWidth >= 500
    if (isDesktop) {
      window.scrollTo(0, 0)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    if (prevPathnameRef.current !== pathname) {
      isDesktop
        ? document.querySelector('#wrap').scrollTo(0, 0)
        : window.scrollTo(0, 0)
      prevPathnameRef.current = pathname
    }
  }, [pathname, isDesktop])

  return null
}

export default ScrollToTop
