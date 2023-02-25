import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'
import { CircleButton } from '../buttons/Buttons'

function Header(props) {
  const typeArray = props.type.split(',')

  return (
    <HeadDiv>
      {typeArray.map((type, index) => {
        return <CircleButton key={index} feature={type}></CircleButton>
      })}
    </HeadDiv>
  )
}

const HeadDiv = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  /* display: flex;
  justify-content: space-between; */
  padding: ${theme.calRem(12)} ${theme.calRem(24)};

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`

export default Header
