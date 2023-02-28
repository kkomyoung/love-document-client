import React from 'react'
import styled from 'styled-components'

function Header(props) {
  return <HeadDiv>{props.children}</HeadDiv>
}

const HeadDiv = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  padding: 12px 24px;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`

export default Header
