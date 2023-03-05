import React from 'react'
import styled from 'styled-components'

const Header = (props) => {
  return <HeadDiv>{props.children}</HeadDiv>
}

const HeadDiv = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  padding: 1.2rem 2.4rem;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`

export default Header
