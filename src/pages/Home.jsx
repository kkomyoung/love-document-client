import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import ImgTest from '../assets/img_test.png'
import { ReactComponent as IconLetter } from '../assets/icon_letter.svg'
import { ReactComponent as IconAirplane } from '../assets/icon_airplane.svg'
function Home() {
  return (
    <StyledMain>
      <Header btnSetting="/setting" />
      <StyledAirticle>
        <StyledTitleArea>
          <span>망고님의</span>
          연애서류합
        </StyledTitleArea>
        <StyledImgWrap>
          <img src={ImgTest} alt="" />
        </StyledImgWrap>
        <ButtonArea full>
          <RoundButton as={Link} to="/home/research" color="white">
            <i aria-hidden="true">
              <IconAirplane />
            </i>
            <span>내 질문지</span>
          </RoundButton>
        </ButtonArea>
        <ButtonArea full margin="2rem 0 0">
          <RoundButton as={Link} to="/home/answers" color="white">
            <i aria-hidden="true">
              <IconLetter />
            </i>
            <span>도착한 답변</span>
          </RoundButton>
        </ButtonArea>
      </StyledAirticle>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
  background: #79c7ff;
  padding-top: 1rem;
  min-height: 100vh;

  header {
    position: absolute;
    top: 0;
    right: 0;
  }
`

const StyledAirticle = styled.article`
  padding: 0 2.4rem;
`

const StyledTitleArea = styled.h1`
  color: ${(props) => props.theme.gray100};
  font-size: 3.4rem;
  font-weight: 700;

  span {
    display: block;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.2rem;
  }
`

const StyledImgWrap = styled.figure`
  width: 100%;
  margin: 7.4rem 0 7.4rem;
  text-align: center;

  img {
    width: 100%;
    max-width: 31.2rem;
  }
`

export default Home
