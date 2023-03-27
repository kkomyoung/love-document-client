import React from 'react'
import styled from 'styled-components'
import IconArrowNext from '../../assets/icon_arrow_next.svg'
import { ReactComponent as IconKakaoLogo } from '../../assets/icon_logo_kakao.svg'
import { ReactComponent as IconArrowPrev } from '../../assets/icon_arrow_prev.svg'
import { ReactComponent as IconHome } from '../../assets/icon_home.svg'
import { ReactComponent as IconDelete } from '../../assets/icon_delete.svg'
import { ReactComponent as IconSetting } from '../../assets/icon_setting.svg'

const CircleButton = ({ as, to, onClick, feature, className }) => {
  return (
    <StyledCircleButton as={as} to={to} onClick={onClick} className={className}>
      {feature === 'back' && <IconArrowPrev />}
      {feature === 'home' && <IconHome />}
      {feature === 'delete' && <IconDelete />}
      {feature === 'setting' && <IconSetting />}
    </StyledCircleButton>
  )
}
const StyledCircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: none;
  background: #f6f6fc;
`

const TextButton = ({ text, type, as, to, onClick, disabled = false }) => {
  return (
    <StyledTextButton
      type={type}
      as={as}
      to={to}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span>
    </StyledTextButton>
  )
}
const StyledTextButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.fontSize.label_m_sb};
  color: ${(props) => props.theme.blue700};
  transition: 0.3s;

  &:hover {
    color: ${(props) => props.theme.blue800};
  }

  &:disabled {
    color: ${(props) => props.theme.gray400};
  }

  ${(props) => {
    if (props.type === 'underline') {
      return `
      padding-bottom: 0.4rem;
      border-bottom: 1px solid ${props.theme.blue700};

      &:hover {
        border-bottom: 1px solid ${props.theme.blue800};
      }

      &:disabled {
        border-bottom: 1px solid ${props.theme.gray400};
      }
      `
    }
  }}
`
const RoundButton = ({
  as,
  to,
  onClick,
  size,
  color,
  border,
  text,
  arrowIcon,
  children,
  disabled = false,
}) => {
  return (
    <StyledRoundButton
      as={as}
      to={to}
      onClick={onClick}
      size={size}
      color={color}
      border={border}
      className="btn"
      disabled={disabled}
    >
      <span>{text}</span>
      {children}
      {arrowIcon && <img src={IconArrowNext} />}
    </StyledRoundButton>
  )
}

const KakaoButton = ({ text, onClick }) => {
  return (
    <RoundButton color="kakao" onClick={onClick}>
      <i aria-hidden="true">
        <IconKakaoLogo />
      </i>
      <span>{text}</span>
    </RoundButton>
  )
}

const ButtonArea = ({ children, flex, full, margin, padding }) => {
  return (
    <StyledButtonArea flex={flex} full={full} margin={margin} padding={padding}>
      {children}
    </StyledButtonArea>
  )
}

const StyledRoundButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5.3rem;
  background-color: ${(props) => props.theme.gray900};
  color: ${(props) => props.theme.bgColor};
  transition: 0.3s;

  img {
    margin-left: 0.9rem;
  }

  i + span {
    margin-left: 1rem;
  }

  // 크기별
  ${(props) => {
    if (props.size === 'large') {
      return `
      width: 16rem;
      height: 7.2rem;
      ${props.theme.fontSize.label_l}
      
      `
    } else {
      return `
      width: 13.6rem;
      height: 5.2rem;
      ${props.theme.fontSize.label_m_m}
      `
    }
  }}
  // 색상별
  ${(props) => {
    if (props.color === 'pink') {
      return `
        background-color: ${props.theme.pink700};

        &:hover {
          background-color: ${props.theme.pink800};
        }
      `
    } else if (props.color === 'white') {
      return `
        background-color: ${props.theme.bgColor};
        color: ${props.theme.gray900};

        &:hover {
          background-color: ${props.theme.pink300};
        }
      `
    } else if (props.color === 'kakao') {
      return `
        background-color: ${props.theme.kakao};
        color: ${props.theme.gray900};
      `
    } else {
      return `
        &:hover {
          background-color: ${props.theme.gray800};
        }
      `
    }
  }}

  // border 유무
  ${(props) => {
    if (props.border) {
      return `
        border: 1px solid ${props.theme.gray300};
      `
    }
  }}


  &:disabled {
    background-color: #f6f6fc;
    color: ${(props) => props.theme.gray400};
  }
`

const StyledButtonArea = styled.div`
  text-align: center;

  .btn {
    margin: 0 auto;
    & + .btn {
      margin: 0.8rem auto 0;
    }
  }

  ${(props) => {
    if (props.margin) return `margin: ${props.margin};`
  }}
  ${(props) => {
    if (props.padding) return `padding: ${props.padding};`
  }}
  ${(props) => {
    if (props.flex) {
      return `
        display: flex;
        justify-content: center;

        .btn + .btn {
          margin: 0 0 0 0.8rem;
        }
      `
    }
  }}
  ${(props) => {
    if (props.full) {
      return `
        .btn {
          width: 100%;
        }
        
      `
    }
  }}
`
export { CircleButton, TextButton, RoundButton, KakaoButton, ButtonArea }
