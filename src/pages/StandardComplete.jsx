import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { Title, TextDesc } from '../components/texts/Texts'
import ImgTest from '../assets/img_test.png'
function StandardComplete() {
  return (
    <StyledMain>
      <Header btnClose="/" />
      <StyledAirticle>
        <StyledImgWrap>
          <img src={ImgTest} alt="" />
        </StyledImgWrap>
        <Title>내 기준 작성완료</Title>
        <TextDesc>
          <span>내 기준이 저장되었어요 😍</span>
          <br />
          <span>상대방의 답변을 받은 후 내 기준과 비교해드릴게요</span>
        </TextDesc>
        <ButtonArea margin="11rem 0 0 0">
          <RoundButton as={Link} to="/home" size="large" text="확인" />
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

const StyledImgWrap = styled.figure`
  width: 100%;
  margin-bottom: 4.3rem;
  text-align: center;

  img {
    width: 100%;
    max-width: 31.2rem;
  }
`

export default StandardComplete
