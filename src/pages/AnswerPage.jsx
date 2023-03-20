import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'

function AnswerPage() {
  return (
    <StyledMain>
      <Header title="답변하기" btnBack />
      <StyledAirticle></StyledAirticle>
    </StyledMain>
  )
}

export default AnswerPage

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
`

const StyledAirticle = styled.article`
  padding: 0 2.4rem;
`
