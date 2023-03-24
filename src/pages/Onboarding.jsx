import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { Title, TextDesc } from '../components/texts/Texts'
import Lottie from '../components/lotties/Lottie'

function Onboarding() {
  return (
    <StyledMain>
      <Header btnBack />
      <StyledAirticle>
        <Lottie data="puzzle" margin="0 -2.4rem 4.6rem" />
        <Title>연애서류합이란?</Title>
        <TextDesc>
          소개팅을 하기 전 상대방이 나의 이상형과 얼마나 비슷한지 확인할 수 있는
          서비스 입니다. 질문지를 만들고 상대에게 공유해 확인해 보세요 😍
        </TextDesc>
        <ButtonArea margin="11rem 0 0 0">
          <RoundButton as={Link} to="/login" size="large" text="다음" />
        </ButtonArea>
      </StyledAirticle>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
`

const StyledAirticle = styled.article`
  padding: 0 2.4rem;
`

export default Onboarding
