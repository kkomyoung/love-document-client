import React from 'react'
import styled from 'styled-components'

function Title(props) {
  return <StyledTitle>{props.children}</StyledTitle>
}

function Title3B(props) {
  return <StyledTitle3B color={props.color}>{props.children}</StyledTitle3B>
}

function Title3M(props) {
  return <StyledTitle3M color={props.color}>{props.children}</StyledTitle3M>
}

function Title4M(props) {
  return <StyledTitle4M color={props.color}>{props.children}</StyledTitle4M>
}

function Title4SB(props) {
  return <StyledTitle4SB color={props.color}>{props.children}</StyledTitle4SB>
}

function Title3MIocn(props) {
  return (
    <StyledTitleIconWrap>
      <img src={props.icon} alt="title-icon" />
      <StyledTitle3M>{props.children}</StyledTitle3M>
    </StyledTitleIconWrap>
  )
}

function Text1(props) {
  return <StyledText1 color={props.color}>{props.children}</StyledText1>
}

function Text2(props) {
  return <StyledText2 color={props.color}>{props.children}</StyledText2>
}

function TextDesc(props) {
  return <StyledTextDesc>{props.children}</StyledTextDesc>
}

function TextArea(props) {
  return <StyledTextArea>{props.children}</StyledTextArea>
}

function LabelM(props) {
  return <StyledLabelM color={props.color}>{props.children}</StyledLabelM>
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
  color: ${(props) => props.color || props.theme.gray800};
`

const StyledTitle3B = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${(props) => props.color || props.theme.gray800};
`

const StyledTitle4M = styled.h4`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  color: ${(props) => props.color || props.theme.gray800};
`

const StyledTitle4SB = styled.h4`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2;
  color: ${(props) => props.color || props.theme.gray800};
`

const StyledTitleIconWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    margin-right: 0.4rem;
  }
`

const StyledText1 = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  font-weight: 400;
  color: ${(props) => props.color || props.theme.gray800};
`

const StyledText2 = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  font-weight: 400;
  color: ${(props) => props.color || props.theme.gray800};
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
  display: flex;
  font-size: 1.6rem;
  line-height: 10rem;
  color: ${(props) => props.color || props.theme.gray800};
  align-items: center;
  gap: 1rem;
`

export {
  Title,
  Title3M,
  Title3B,
  Title3MIocn,
  Title4M,
  Title4SB,
  Text1,
  Text2,
  TextDesc,
  TextArea,
  LabelM,
}
