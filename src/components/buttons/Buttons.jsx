import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'

const CircleButton = ({ feature }) => {
  console.log(feature)

  return <CircleBtn type="button" className={feature}></CircleBtn>
}
const CircleBtn = styled.button`
  width: ${theme.calRem(60)};
  height: ${theme.calRem(60)};
  border-radius: 50%;
  border: none;

  &.back {
    float: left;
    background: #f6f6fc url('/assets/icon_arrow_prev.svg') center no-repeat;
  }
  &.close {
    float: right;
    background: #f6f6fc url('/assets/icon_close.svg') center no-repeat;
  }
  &.delete {
    float: right;
    background: #f6f6fc url('/assets/icon_delete.svg') center no-repeat;
  }
`
const RoundButton = ({ large, color, text, icon }) => {
  return (
    <RoundBtn large={large} color={color} type="button">
      <span>{text}</span>
      {icon && <img src={'/assets/icon_arrow_next.svg'} />}
    </RoundBtn>
  )
}
const RoundBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: none;
  border-radius: ${theme.calRem(53)};
  background-color: #181818;
  color: #fff;

  img {
    margin-left: ${theme.calRem(9)};
  }

  // 크기
  ${(props) => {
    if (props.large) {
      return `
      width: ${theme.calRem(160)};
      height: ${theme.calRem(72)};
      font-size: ${theme.calRem(18)};
      
      `
    } else {
      return `
      width: ${theme.calRem(136)};
      height: ${theme.calRem(52)};
      font-size: ${theme.calRem(16)};
      `
    }
  }}

  // 색상
  ${(props) => {
    if (props.color === 'pink') {
      return `
      background-color: #f85675;
      `
    } else if (props.color === 'white') {
      return `
      background-color: #ffffff;
      color: #181818;
      `
    }
  }}
`

export { CircleButton, RoundButton }
