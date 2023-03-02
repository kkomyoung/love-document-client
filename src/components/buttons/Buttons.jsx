import React from 'react'
import styled from 'styled-components'
import IconArrowNext from '../../assets/icon_arrow_next.svg'
import { ReactComponent as IconArrowPrev } from '../../assets/icon_arrow_prev.svg'
import { ReactComponent as IconClose } from '../../assets/icon_close.svg'
import { ReactComponent as IconDelete } from '../../assets/icon_delete.svg'

const CircleButton = ({ feature }) => {
  return (
    <CircleBtn type="button" className={feature}>
      {feature === 'back' && <IconArrowPrev />}
      {feature === 'close' && <IconClose />}
      {feature === 'delete' && <IconDelete />}
    </CircleBtn>
  )
}
const CircleBtn = styled.button`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: none;
  background: #f6f6fc;

  &.back {
    float: left;
  }
  &.close,
  &.delete {
    float: right;
  }
`
const RoundButton = ({ large, color, text, icon }) => {
  return (
    <RoundBtn large={large} color={color} type="button">
      <span>{text}</span>
      {icon && <img src={IconArrowNext} />}
    </RoundBtn>
  )
}

const ButtonArea = ({ children }) => {
  return <ButtonWrap>{children}</ButtonWrap>
}

const RoundBtn = styled.button`
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
      font-size: 1.8rem;
      
      `
    } else {
      return `
      width: 13.6rem;
      height: 5.2rem;
      font-size: 1.6rem;
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
    }
  }}
`
const ButtonWrap = styled.div`
  padding-bottom: 4.8rem;
  margin-top: 11rem;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  /* align-items: center; */
`
export { CircleButton, RoundButton, ButtonArea }
