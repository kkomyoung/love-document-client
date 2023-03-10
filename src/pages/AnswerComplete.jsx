import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { Title, TextDesc } from '../components/texts/Texts'
import { ReactComponent as ImgHeartWing } from '../assets/img_heart_wing.svg'

const AnswerComplete = () => {
  const name = '사과'

  return (
    <StyledMain>
      <Header btnBack btnClose="/" />
      <StyledAirticle>
        <StyledImgWrap>
          <ImgHeartWing />
        </StyledImgWrap>
        <Title>답변 전달 완료</Title>
        <TextDesc>
          <span>{name}님의 답변이 전달되었어요.</span>
          <br />
          <span>{name}님도 질문지를 만들어 상대에게 전달해보세요 😍</span>
        </TextDesc>
        <ButtonArea margin="13.2rem 0 0 0">
          <RoundButton
            as={Link}
            to="/research"
            size="large"
            text="질문지 만들기"
          />
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
  margin: 0 -2.4rem 4.3rem;

  svg {
    display: block;
    width: 100%;
  }
`

export default AnswerComplete
