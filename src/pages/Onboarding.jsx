import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'
import Header from '../components/header/Header'
import { RoundButton } from '../components/buttons/Buttons'
import TestImg from '../assets/img_test.png'
function Onboarding() {
  return (
    <div>
      <Header type="back, close"></Header>
      <Wrapper>
        <ImgWrap>
          <img src={TestImg} alt="" />
        </ImgWrap>
        <TitleWrap>
          <h1>연애서류합이란?</h1>
          <p>
            <span>
              소개팅을 하기 전 상대방이 나의 이상형과 얼마나 비슷한지 확인할 수
              있는 서비스 입니다.
            </span>
            <br />
            <span>질문지를 만들고 상대에게 공유해 확인해 보세요 😍</span>
          </p>
        </TitleWrap>
        <ButtonWrap>
          <RoundButton text="다음"></RoundButton>
        </ButtonWrap>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.article`
  padding: 0 ${theme.calRem(24)};
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

const TitleWrap = styled.header`
  h1 {
    font-size: ${theme.calRem(32)};
    font-weight: 600;
    color: #181818;
  }

  p {
    font-size: ${theme.calRem(14)};
    margin-top: ${theme.calRem(14)};
    line-height: 1.6;
    color: #3a393d;
  }
`
const ButtonWrap = styled.div`
  padding-bottom: ${theme.calRem(48)};
  margin-top: ${theme.calRem(110)};
`

export default Onboarding
