import React from 'react'
import styled from 'styled-components'

function Title(props) {
  return <StyledTitle>{props.children}</StyledTitle>
}

function TextDesc(props) {
  return <StyledTextDesc>{props.children}</StyledTextDesc>
}

function TextArea(props) {
  return <StyledTextArea>{props.children}</StyledTextArea>
}

const StyledTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.gray900};
`
const StyledTextDesc = styled.p`
  font-size: 1.4rem;
  margin-top: 1.4rem;
  line-height: 1.6;
  font-weight: 400;
  color: ${(props) => props.theme.gray800};
`
const StyledTextArea = styled.div`
  padding: 0 2.4rem;
`

export { Title, TextDesc, TextArea }
