import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { CircleButton } from '../buttons/Buttons'

const Header = ({ title, btnBack, btnClose, btnDelete, btnSetting }) => {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 500)
  const [scrollTarget, setScrollTarget] = useState(window)

  // 페이지 뒤로가기
  const handleGoBack = () => {
    navigate(-1)
  }

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 500)
    setScrollTarget(isDesktop ? document.querySelector('#wrap') : window)
  }

  const handleScroll = () => {
    const scrollPosition = isDesktop
      ? scrollTarget.scrollTop
      : scrollTarget.scrollY
    setIsScrolled(scrollPosition > 100)
  }

  useEffect(() => {
    handleResize()
    handleScroll()

    window.addEventListener('resize', handleResize)
    scrollTarget.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      scrollTarget.removeEventListener('scroll', handleScroll)
    }
  }, [isDesktop, scrollTarget])

  return (
    <StyledHeader className={isScrolled ? 'on' : ''}>
      {btnBack && (
        <CircleButton
          as="a"
          onClick={handleGoBack}
          feature="back"
          className="left"
        />
      )}
      {title && <p>{title}</p>}
      {btnClose && (
        <CircleButton
          as={typeof btnClose === 'string' ? Link : undefined}
          to={typeof btnClose === 'string' ? btnClose : undefined}
          onClick={typeof btnClose === 'function' ? btnClose : undefined}
          feature="close"
          className="right"
        />
      )}
      {btnDelete && (
        <CircleButton
          as={typeof btnDelete === 'string' ? Link : undefined}
          to={typeof btnDelete === 'string' ? btnDelete : undefined}
          onClick={typeof btnDelete === 'function' ? btnDelete : undefined}
          feature="delete"
          className="right"
        />
      )}
      {btnSetting && (
        <CircleButton
          as={typeof btnSetting === 'string' ? Link : undefined}
          to={typeof btnSetting === 'string' ? btnSetting : undefined}
          onClick={typeof btnSetting === 'function' ? btnSetting : undefined}
          feature="setting"
          className="right"
        />
      )}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  & + article {
    padding-top: 8.4rem;
  }

  button,
  a {
    position: absolute;
  }
  .left {
    left: 2.4rem;
    top: 1.2rem;
  }
  .right {
    right: 2.4rem;
    top: 1.2rem;
  }

  p {
    display: none;
    ${(props) => props.theme.fontSize.label_m_sb}
    text-align: center;
    width: 70%;
  }

  // sticky
  &.on {
    height: 4.8rem;
    background: #fff;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;

    p {
      display: block;
    }

    button,
    a {
      width: 4.8rem;
      height: 4.8rem;
      background: none;
    }

    .left {
      left: 0;
      top: 0;
    }
    .right {
      right: 0;
      top: 0;
    }
  }
`

export default Header
