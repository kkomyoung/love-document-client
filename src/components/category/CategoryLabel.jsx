import React from 'react'
import styled from 'styled-components'

function CategoryLabel({ emoji, title }) {
  return (
    <StyledLabel>
      <strong>
        <i aria-hidden="true">{emoji}</i>
        {title}
      </strong>
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  strong {
    display: inline-flex;
    align-items: center;
    height: 3rem;
    padding: 0 1.2rem;
    font-size: 1.4rem;
    border-radius: 2.6rem;
    margin-bottom: 1.6rem;
    color: ${(props) => props.theme.pink700};
    background: ${(props) => props.theme.pink300};

    i {
      margin-right: 0.3rem;
      font-size: 1.2rem;
    }
  }
`

export default CategoryLabel
