import React from 'react'
import styled from 'styled-components'

const CategoryStandards = ({ items }) => {
  return (
    <StyledItems>
      {items.map((item) => (
        <li key={item.id}>
          <StyledItemLabel>
            <span>{item.title}</span>
          </StyledItemLabel>
          <p>170 이상 180 이하를 원해요</p>
        </li>
      ))}
    </StyledItems>
  )
}
const StyledItems = styled.ul`
  li {
    display: flex;
    align-items: center;

    & + li {
      margin-top: 0.6rem;
    }
  }

  p {
    ${(props) => props.theme.fontSize.label_s_m}
    color: ${(props) => props.theme.gray700};
  }
`

const StyledItemLabel = styled.em`
  display: inline-flex;
  min-width: 4.8rem;
  height: 3rem;
  border-radius: 2.6rem;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-right: 0.4rem;

  span {
    ${(props) => props.theme.fontSize.label_s_m}
    color: ${(props) => props.theme.gray700};
    padding: 0 1.2rem;
  }
`

export default CategoryStandards
