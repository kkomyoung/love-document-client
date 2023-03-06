import React from 'react'
import styled from 'styled-components'
import IconArrowNext from '../../assets/icon_arrow_next.svg'
import IconKakaoLogo from '../../assets/icon_logo_kakao.svg'
import { ReactComponent as IconArrowPrev } from '../../assets/icon_arrow_prev.svg'
import { ReactComponent as IconClose } from '../../assets/icon_close.svg'
import { ReactComponent as IconDelete } from '../../assets/icon_delete.svg'

const CircleButton = ({ feature, align }) => {
  return (
    <StyledCircleButton type="button" className={align}>
      {feature === 'back' && <IconArrowPrev />}
      {feature === 'close' && <IconClose />}
      {feature === 'delete' && <IconDelete />}
    </StyledCircleButton>
  )
}
const StyledCircleButton = styled.button`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: none;
  background: #f6f6fc;
`
const RoundButton = ({ large, color, text, icon, onClick }) => {
  return (
    <StyledRoundButton
      large={large}
      color={color}
      onClick={onClick}
      type="button"
    >
      <span>{text}</span>
      {icon && <img src={IconArrowNext} />}
    </StyledRoundButton>
  )
}

const KakaoButton = ({ children }) => {
  return (
    <StyledKakaoButton>
      <img src={IconKakaoLogo} alt="kakao-logo-icon" />
      {children}
    </StyledKakaoButton>
  )
}

const ButtonArea = ({ children, type, margin, padding }) => {
  return (
    <StyledButtonArea type={type} margin={margin} padding={padding}>
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

  img {
    margin-left: 0.9rem;
  }

  // 크기별
  ${(props) => {
    if (props.large) {
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
      `
    } else if (props.color === 'white') {
      return `
        background-color: ${props.theme.bgColor};
        color: ${props.theme.gray900};
      `
    } else if (props.color === 'kakao') {
      return `
        background-color: ${props.theme.kakao};
        color: ${props.theme.gray900};
      `
    }
  }}
`

const StyledKakaoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.kakao};
  ${(props) => props.theme.fontSize.label_m_m}
  color: ${(props) => props.theme.gray900};
  border: none;
  border-radius: 53px;

  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1rem;
  }
`

const StyledButtonArea = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  /* align-items: center; */

  ${(props) => {
    if (props.margin) return `margin: ${props.margin};`
  }}

  ${(props) => {
    if (props.padding) return `padding: ${props.padding};`
  }}

  ${(props) => {
    if (props.type === 'full') {
      return `
        button {
          flex: 1;
        }

        button + button {
          margin-left: 0.8rem;
        }
      `
    }
  }}
`
export { CircleButton, RoundButton, KakaoButton, ButtonArea }
