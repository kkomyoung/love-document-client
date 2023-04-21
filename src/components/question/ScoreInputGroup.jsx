import React from 'react'
import styled from 'styled-components'
import { ReactComponent as IconHeart } from '../../assets/icon_heart.svg'

function ScoreInputGroup({ name, positiveLabel, negativeLabel }) {
  return (
    <Box>
      <ScoreButtonBox>
        {[1, 2, 3, 4, 5].map((number) => (
          <ScoreButton key={number}>
            <input
              type="radio"
              name={name}
              value={number}
              id={`${name}_${number}`}
            />
            <label htmlFor={`${name}_${number}`} />
            <IconHeart fill="white" />
          </ScoreButton>
        ))}
      </ScoreButtonBox>
      <ExampleTextBox>
        <ExampleText>{negativeLabel}</ExampleText>
        <ExampleText>{positiveLabel}</ExampleText>
      </ExampleTextBox>
    </Box>
  )
}

export default ScoreInputGroup

const Box = styled.div`
  display: flex;
  flex-direction: column;
`

const ScoreButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button + button {
    margin-left: 0.8rem;
  }

  button:nth-child(odd) label {
    width: 4.8rem;
    height: 4.8rem;
  }
  button:nth-child(even) label {
    width: 4rem;
    height: 4rem;
  }
  button:nth-child(3) label {
    width: 3.2rem;
    height: 3.2rem;
  }
`

const ScoreButton = styled.button`
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

const ExampleTextBox = styled.div`
  margin-top: 0.8rem;

  & span:nth-child(1) {
    float: left;
  }
  & span:nth-child(2) {
    float: right;
  }
`

const ExampleText = styled.span`
  ${(props) => props.theme.fontSize.label_s_m};
  color: ${(props) => props.theme.gray700};
  padding: 0.8rem 1.2rem;

  background-color: ${(props) => props.theme.bgColor};
  border-radius: 2.6rem;
`
