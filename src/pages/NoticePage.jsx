import React from 'react'
import styled from 'styled-components'

function NoticePage() {
  return (
    <StyledMain>
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

export default NoticePage
