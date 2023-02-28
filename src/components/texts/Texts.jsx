import React from 'react'
import styled from 'styled-components'

function Title(props) {
  return <StyledTitle>{props.children}</StyledTitle>
}

function TextDesc(props) {
  return <StyledTextDesc>{props.children}</StyledTextDesc>
}

const StyledTitle = styled.h1`
  font-size: ${(props) => props.theme.calRem(32)};
  font-weight: 600;
  color: ${(props) => props.theme.gray900};
`
const StyledTextDesc = styled.p`
  font-size: ${(props) => props.theme.calRem(14)};
  margin-top: ${(props) => props.theme.calRem(14)};
  line-height: 1.6;
  color: ${(props) => props.theme.gray800};
`

export { Title, TextDesc }
