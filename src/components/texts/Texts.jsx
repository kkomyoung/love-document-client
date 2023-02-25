import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'

function Title(props) {
  return <StyledTitle>{props.children}</StyledTitle>
}

function TextDesc(props) {
  return <StyledTextDesc>{props.children}</StyledTextDesc>
}

const StyledTitle = styled.h1`
  font-size: ${theme.calRem(32)};
  font-weight: 600;
  color: #181818;
`
const StyledTextDesc = styled.p`
  font-size: ${theme.calRem(14)};
  margin-top: ${theme.calRem(14)};
  line-height: 1.6;
  color: #3a393d;
`

export { Title, TextDesc }
