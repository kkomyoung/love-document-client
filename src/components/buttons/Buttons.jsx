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
  width: ${(props) => props.theme.calRem(60)};
  height: ${(props) => props.theme.calRem(60)};
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
const RoundBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: none;
  border-radius: ${(props) => props.theme.calRem(53)};
  background-color: ${(props) => props.theme.gray900};
  color: ${(props) => props.theme.bgColor};

  img {
    margin-left: ${(props) => props.theme.calRem(9)};
  }

  // 크기별
  ${(props) => {
    if (props.large) {
      return `
      width: ${props.theme.calRem(160)};
      height: ${props.theme.calRem(72)};
      font-size: ${props.theme.calRem(18)};
      
      `
    } else {
      return `
      width: ${props.theme.calRem(136)};
      height: ${props.theme.calRem(52)};
      font-size: ${props.theme.calRem(16)};
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

export { CircleButton, RoundButton }
