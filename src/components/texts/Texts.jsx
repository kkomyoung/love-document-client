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

const TextArea = ({ children }) => {
  return <StyledTextArea>{children}</StyledTextArea>
}

const SubTextArea = ({ children }) => {
  return <StyledSubTextArea>{children}</StyledSubTextArea>
}

const StyledTitle = styled.h1`
  display: flex;
  align-items: center;
  ${(props) => props.theme.fontSize.h1}
  color: ${(props) => props.theme.gray900};
  flex-wrap: wrap;
  i {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4.8rem;
    height: 4.8rem;
    margin-right: 0.4rem;

    svg {
      width: 4rem;
      height: 4rem;
    }
  }
`

const StyledSubTitle = styled.h2`
  display: flex;
  align-items: center;
  ${(props) => props.theme.fontSize.h2}
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
  padding: 1.6rem 2.4rem 0;
  margin: ${(props) => props.margin};
`

const StyledSubTextArea = styled.div`
  padding: 0 0.4rem;
  margin: ${(props) => props.margin};
`

export { Title, SubTitle, TextDesc, TextArea, SubTextArea }
