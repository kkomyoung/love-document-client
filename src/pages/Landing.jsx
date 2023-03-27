import React from 'react'
import styled from 'styled-components'
import changeBgColor from '../utils/changeBgColor'
import Lottie from '../components/lotties/Lottie'
import { Link } from 'react-router-dom'
import {
  ButtonArea,
  RoundButton,
  TextButton,
} from '../components/buttons/Buttons'

import { useQuery } from 'react-query'
import { login } from '../apis'

const Landing = () => {
  const { refetch, data: categories } = useQuery(
    'categories',
    () => login({ nickname: '보니', password: '1234' }),
    {
      enabled: false,
    }
  )

  console.log(categories)

  // const { data, error } = useQuery('categoris', getCategories)

  changeBgColor('#79c7ff')
  return (
    <StyledMain>
      <Lottie data="main" />
      <StyledTitle>
        <StyledSubTitle>두근 - 두근</StyledSubTitle>
        연애서류합
      </StyledTitle>
      <StyledDescription>
        <span>소개팅 상대가 내 기준에 얼마나 부합할까?</span>
        <br />
        <span>내 연애 서류를 만들고 답변을 받아봐요</span>
      </StyledDescription>
      <ButtonArea margin="3.1rem 0 0 0">
        <RoundButton
          as={Link}
          to="/onboarding"
          color="white"
          text="시작하기"
          onClick={refetch}
        />
      </ButtonArea>
      <ButtonArea margin="2.1rem 0 0 0">
        <TextButton
          as={Link}
          to="/login"
          type="underline"
          text="이미 질문지를 만들었다면? 로그인"
        />
      </ButtonArea>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  background-color: ${(props) => props.theme.blue500};
  padding: 5rem 0 7.6rem;

  @media (max-width: 499px) {
    min-height: calc(100vh - 12.6rem);
  }
`

const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 7.5rem;
  color: ${(props) => props.theme.gray100};
  margin: 2.1rem;
  letter-spacing: -0.03em;

  @media (max-width: 360px) {
    font-size: 20vw;
  }
`

const StyledSubTitle = styled.span`
  display: block;
  font-weight: 400;
  font-size: 4.5rem;
  color: ${(props) => props.theme.gray100};
  margin: 0 0 0.5rem 0.5rem;

  @media (max-width: 360px) {
    font-size: 12vw;
  }
`

const StyledDescription = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  color: ${(props) => props.theme.gray100};
  margin: 2.1rem 2.8rem 0 2.1rem;
  line-height: 1.4;

  @media (max-width: 360px) {
    font-size: 5vw;
  }
`
export default Landing
