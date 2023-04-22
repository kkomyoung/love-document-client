import React from 'react'
import styled from 'styled-components'

function ExampleButton({ exampleId, name, multiple = 'N', content }) {
  return (
    <StyledButton>
      <input
        type={multiple === 'Y' ? 'checkbox' : 'radio'}
        name={name}
        id={`${name}_${exampleId}`}
      />
      <label htmlFor={`${name}_${exampleId}`}>{content}</label>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: inline-flex;

  input {
    ${(props) => props.theme.a11yHidden}
  }

  input + label {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5.3rem;
    background-color: ${(props) => props.theme.bgColor};
    ${(props) => props.theme.fontSize.label_m_m}
    color: ${(props) => props.theme.gray900};
    transition: 0.3s;
    width: 13.6rem;
    height: 5.2rem;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.gray300};
  }

  input:checked + label {
    background-color: ${(props) => props.theme.pink700};
    color: ${(props) => props.theme.bgColor};
  }
`

export default ExampleButton
