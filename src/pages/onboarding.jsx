import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'
import Header from '../components/header/header'
import { RoundButton } from '../components/buttons/buttons'

const Title = styled.h1`
  font-size: ${theme.fontSize.title};
`
const TextDesc = styled.p`
  font-size: ${theme.calRem(14)};
  margin-top: ${theme.calRem(14)};
  line-height: 1.57;
`

function Onboarding() {
  return (
    <div>
      <Header></Header>
      <section>
        <Title>연애서류합이란?11</Title>
        <TextDesc>
          소개팅을 하기 전 상대방이 나의 이상형과 얼마나 비슷한지 확인할 수 있는
          서비스 입니다. 질문지를 만들고 상대에게 공유해 확인해 보세요 😍
        </TextDesc>
        <RoundButton text="다음"></RoundButton>
      </section>
    </div>
  )
}

export default Onboarding
