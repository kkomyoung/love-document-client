import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CircleButton } from '../buttons/Buttons'

const Header = ({ title, leftBtn, rightBtn }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setIsScrolled(true) : setIsScrolled(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <StyledHeader className={isScrolled && title ? 'on' : ''}>
      <div className="inner">
        {leftBtn && (
          <CircleButton feature={leftBtn} align="left"></CircleButton>
        )}
        {title && <p>{title}</p>}
        {rightBtn && (
          <CircleButton feature={rightBtn} align="right"></CircleButton>
        )}
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 8.4rem;

  .inner {
    position: relative;
    max-width: 768px;
    width: 100%;
    height: 8.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
  }

  button {
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
    ${(props) => props.theme.fontSize.label_m_sb}
    text-align: center;
    width: 70%;
    opacity: 0;
    transition: 0.3s;
  }

  // fixed
  &.on {
    .inner {
      position: fixed;
      height: 4.8rem;
      background: #fff;
      padding: 0;

      & + article {
        padding-top: 8.4rem;
      }

      p {
        opacity: 1;
      }

      button {
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
  }
`

export default Header
