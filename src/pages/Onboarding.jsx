import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'
import Header from '../components/header/Header'
import { RoundButton } from '../components/buttons/Buttons'
import { Title, TextDesc } from '../components/texts/Texts'

function Onboarding() {
  return (
    <div>
      <Header type="back, close"></Header>
      <Wrapper>
        <ImgWrap>
          <img src="/assets/img_test.png" alt="" />
        </ImgWrap>
        <Title>연애서류합이란?</Title>
        <TextDesc>
          소개팅을 하기 전 상대방이 나의 이상형과 얼마나 비슷한지 확인할 수 있는
          서비스 입니다. 질문지를 만들고 상대에게 공유해 확인해 보세요 😍
        </TextDesc>
        <ButtonWrap>
          <RoundButton text="다음"></RoundButton>
        </ButtonWrap>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.article`
  padding: 0 24px;
`

const ImgWrap = styled.figure`
  width: 100%;
  margin-bottom: ${theme.calRem(43)};
  text-align: center;

  img {
    width: 100%;
    max-width: ${theme.calRem(312)};
  }
`
const ButtonWrap = styled.div`
  padding-bottom: ${theme.calRem(48)};
  margin-top: ${theme.calRem(110)};
`

export default Onboarding
