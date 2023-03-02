import React from 'react'
import styled from 'styled-components'

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

const SubTitle = ({ children }) => {
  return <StyledSubTitle>{children}</StyledSubTitle>
}

const TextDesc = ({ children }) => {
  return <StyledTextDesc>{children}</StyledTextDesc>
}

const TextArea = ({ children, margin }) => {
  return <StyledTextArea margin={margin}>{children}</StyledTextArea>
}

const StyledTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.gray900};
`

const StyledSubTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.gray900};

  i {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 3.6rem;
    height: 3.6rem;
    margin-right: 0.8rem;
  }

  & + p {
    margin-top: 1.6rem;
  }
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
  margin: ${(props) => props.margin};
`

export { Title, SubTitle, TextDesc, TextArea }
