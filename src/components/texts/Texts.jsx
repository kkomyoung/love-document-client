import React from 'react'
import styled from 'styled-components'

function Title(props) {
  return <StyledTitle>{props.children}</StyledTitle>
}

function Title3B(props) {
  return (
    <StyledTitle3B fontColor={props.fontColor}>{props.children}</StyledTitle3B>
  )
}

function Title3M(props) {
  return <StyledTitle3M>{props.children}</StyledTitle3M>
}

function TextDesc(props) {
  return <StyledTextDesc>{props.children}</StyledTextDesc>
}

function TextArea(props) {
  return <StyledTextArea>{props.children}</StyledTextArea>
}

function LabelM(props) {
  return (
    <StyledLabelM fontColor={props.fontColor}>{props.children}</StyledLabelM>
  )
}

const StyledTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.gray900};
`

const StyledTitle3M = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  color: ${(props) => props.theme.gray800};
`

const StyledTitle3B = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${(props) => props.fontColor || props.theme.gray800};
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

const StyledLabelM = styled.label`
  font-size: 1.6rem;
  line-height: 10rem;
  color: ${(props) => props.fontColor || props.theme.gray800};
`

export { Title, Title3B, Title3M, TextDesc, TextArea, LabelM }
