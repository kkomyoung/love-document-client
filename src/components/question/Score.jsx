import React from 'react'
import styled from 'styled-components'
import { ReactComponent as IconHeart } from '../../assets/icon_heart.svg'

function Score({ name, positiveText, negativeText }) {
  return (
    <StyledBox>
      <StyledScoreBox>
        <StyledButton>
          <input type="radio" name={name} id={`${name}_1`} />
          <label htmlFor={`${name}_1`} />
          <IconHeart fill="white" />
        </StyledButton>
        <StyledButton>
          <input type="radio" name={name} id={`${name}_2`} />
          <label htmlFor={`${name}_2`} />
          <IconHeart fill="white" />
        </StyledButton>
        <StyledButton>
          <input type="radio" name={name} id={`${name}_3`} />
          <label htmlFor={`${name}_3`} />
          <IconHeart fill="white" />
        </StyledButton>
        <StyledButton>
          <input type="radio" name={name} id={`${name}_4`} />
          <label htmlFor={`${name}_4`} />
          <IconHeart fill="white" />
        </StyledButton>
        <StyledButton>
          <input type="radio" name={name} id={`${name}_5`} />
          <label htmlFor={`${name}_5`} />
          <IconHeart fill="white" />
        </StyledButton>
      </StyledScoreBox>
      <StyledExampleBox>
        <StyledExampleText>{negativeText}</StyledExampleText>
        <StyledExampleText>{positiveText}</StyledExampleText>
      </StyledExampleBox>
    </StyledBox>
  )
}

export default Score

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledScoreBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  li + li {
    margin-left: 0.8rem;
  }

  li:nth-child(odd) label {
    width: 4.8rem;
    height: 4.8rem;
  }
  li:nth-child(even) label {
    width: 4rem;
    height: 4rem;
  }
  li:nth-child(3) label {
    width: 3.2rem;
    height: 3.2rem;
  }
`

const StyledButton = styled.li`
  display: inline-flex;
  position: relative;

  input {
    ${(props) => props.theme.a11yHidden}
  }

  input + label {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${(props) => props.theme.gray300};
    border-radius: 50%;
    background-color: ${(props) => props.theme.bgColor};
    transition: 0.2s;

    ${(props) => props.theme.fontSize.label_m_m}
    cursor: pointer;
  }

  input + label:hover {
    border: 1px solid ${(props) => props.theme.pink700};
  }

  input ~ svg {
    display: none;
  }

  input:checked + label {
    background-color: ${(props) => props.theme.pink700};
    border: 1px solid ${(props) => props.theme.pink700};
  }

  input:checked ~ svg {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`

const StyledExampleBox = styled.div`
  margin-top: 0.8rem;

  & span:nth-child(1) {
    float: left;
  }
  & span:nth-child(2) {
    float: right;
  }
`

const StyledExampleText = styled.span`
  ${(props) => props.theme.fontSize.label_s_m};
  color: ${(props) => props.theme.gray700};
  padding: 0.8rem 1.2rem;

  background-color: ${(props) => props.theme.bgColor};
  border-radius: 2.6rem;
`
