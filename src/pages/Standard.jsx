import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'

function Standard() {
  return (
    <StyledMain>
      <Header btnBack />
      <StyledAirticle></StyledAirticle>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
`

const StyledAirticle = styled.article`
  padding: 0 2.4rem;
`

export default Standard
