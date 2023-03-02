import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import {
  ButtonArea,
  RoundButton,
  CircleButton,
} from '../components/buttons/Buttons'
import { Title, TextDesc } from '../components/texts/Texts'
import ImgTest from '../assets/img_test.png'

function Onboarding() {
  return (
    <div>
      <Header>
        <CircleButton feature="back" />
        <CircleButton feature="close" />
      </Header>
      <Wrapper>
        <ImgWrap>
          <img src={ImgTest} alt="" />
        </ImgWrap>
        <Title>연애서류합이란?</Title>
        <TextDesc>
          소개팅을 하기 전 상대방이 나의 이상형과 얼마나 비슷한지 확인할 수 있는
          서비스 입니다. 질문지를 만들고 상대에게 공유해 확인해 보세요 😍
        </TextDesc>
        <ButtonArea>
          <RoundButton large text="다음"></RoundButton>
        </ButtonArea>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.article`
  padding: 0 2.4rem;
`

const ImgWrap = styled.figure`
  width: 100%;
  margin-bottom: 4.3rem;
  text-align: center;

  img {
    width: 100%;
    max-width: 31.2rem;
  }
`

export default Onboarding
