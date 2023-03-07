import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { CircleButton } from '../buttons/Buttons'

const Header = ({ title, btnBack, btnClose, btnDelete, btnSetting }) => {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)

  // 페이지 뒤로가기
  const handleGoBack = () => {
    navigate(-1)
  }

  // 버튼의 용도 체크
  const checkButtonType = (button, feature, className) => {
    // 링크일 때
    if (typeof button === 'string') {
      return (
        <CircleButton
          as={Link}
          to={button}
          feature={feature}
          className={className}
        />
      )
      // 버튼일 때
    } else if (typeof button === 'function') {
      return (
        <CircleButton
          onClick={button}
          feature={feature}
          className={className}
        />
      )
    }
  }

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
        {btnBack && (
          <CircleButton
            as="a"
            onClick={handleGoBack}
            feature="back"
            className="left"
          />
        )}
        {title && <p>{title}</p>}
        {btnClose && checkButtonType(btnClose, 'close', 'right')}
        {btnDelete && checkButtonType(btnDelete, 'delete', 'right')}
        {btnSetting && checkButtonType(btnSetting, 'setting', 'right')}
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
  }
`

export default Header
