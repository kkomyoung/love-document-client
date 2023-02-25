import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'

function Header(props) {
  return <HeadDiv>{props.children}</HeadDiv>
}

const HeadDiv = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  padding: ${theme.calRem(12)} ${theme.calRem(24)};

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`

export default Header
