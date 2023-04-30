import React from 'react'
import styled from 'styled-components'

const CategoryItems = ({ items }) => {
  return (
    <StyledItems>
      {items.map((item) => (
        <li key={item}>
          <span>{item}</span>
        </li>
      ))}
    </StyledItems>
  )
}
const StyledItems = styled.ul`
  li {
    min-width: 4.8rem;
    height: 3rem;
    border-radius: 2.6rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-left: 0.4rem;
    margin-bottom: 0.6rem;

    span {
      ${(props) => props.theme.fontSize.label_s_m}
      color: ${(props) => props.theme.gray700};
      padding: 0 1.2rem;
    }
  }
`

export default CategoryItems
