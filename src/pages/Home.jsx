import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import changeBgColor from '../utils/changeBgColor'
import {
  CircleButton,
  ButtonArea,
  RoundButton,
} from '../components/buttons/Buttons'
import Lottie from '../components/lotties/Lottie'
import { ReactComponent as IconLetter } from '../assets/icon_letter.svg'
import { ReactComponent as IconAirplane } from '../assets/icon_airplane.svg'
const Home = () => {
  const name = localStorage.getItem('nickname')
  changeBgColor('#79c7ff')

  return (
    <StyledMain>
      <StyledHeader>
        <StyledTitleArea>
          <span>{name}님의</span>
          연애서류합
        </StyledTitleArea>
        <CircleButton as={Link} to="/setting" feature="setting" />
      </StyledHeader>
      <StyledAirticle>
        <Lottie data="home" margin="7.4rem 0 7.4rem" />
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

const StyledHeader = styled.header`
  position: relative;
  margin: 1.2rem 2.4rem 0 2.4rem;

  a {
    position: absolute;
    top: 0;
    right: 0;
  }
`

const StyledMain = styled.main`
  padding: 1rem 0 4.8rem;
  background: #79c7ff;

  @media (max-width: 499px) {
    min-height: calc(100vh - 5.8rem);
  }
`

const StyledAirticle = styled.article`
  padding: 0 2.4rem !important;
`

const StyledTitleArea = styled.h1`
  color: ${(props) => props.theme.gray100};
  font-size: 3.4rem;
  font-weight: 700;
  max-width: 70%;

  span {
    display: block;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.2rem;
    word-break: break-all;
  }
`

export default Home
