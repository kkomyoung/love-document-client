import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import Header from '../components/header/Header'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { Title, TextDesc } from '../components/texts/Texts'
import { ReactComponent as ImgHeartWing } from '../assets/img_heart_wing.svg'

const AnswerComplete = () => {
  const {
    state: { nickname },
  } = useLocation()

  return (
    <StyledMain>
      <Header btnBack />
      <StyledAirticle>
        <StyledImgWrap>
          <ImgHeartWing />
        </StyledImgWrap>
        <Title>답변 전달 완료</Title>
        <TextDesc>
          <span>{nickname}님의 답변이 전달되었어요.😍</span>
          <br />
          <span>주선자를 통해 성사 여부를 확인해주세요!</span>
          <br />
          <span>{nickname}님도 질문지를 만들어보시겠어요?</span>
        </TextDesc>
        <ButtonArea margin="6.2rem 0 0 0">
          <RoundButton as={Link} to="/" size="large" text="질문지 만들기" />
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
  margin: 0 -2.4rem 3.2rem;

  svg {
    display: block;
    width: 100%;
  }
`

export default AnswerComplete
