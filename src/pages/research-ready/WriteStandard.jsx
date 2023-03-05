import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ImageHeartPuzzle from '../../assets/img_heart_puzzle.svg'
import { RoundButton, ButtonArea } from '../../components/buttons/Buttons'

function WriteStandard() {
  return (
    <Container>
      <Box>
        <Header>
          <HeartPuzzleImg src={ImageHeartPuzzle} alt="image-heart-puzzle" />
          <TitleArea>
            <Title>내 기준에 부합할까?</Title>
            <Subtitle>
              바라는 조건을 알려주시면
              <br />
              상대방의 답변과 비교해드려요
            </Subtitle>
          </TitleArea>
        </Header>
        <ButtonArea type="full" mt={2.4}>
          <RoundButton icon text="내 기준 작성하기" color="pink">
            <Link to="/"></Link>
          </RoundButton>
        </ButtonArea>
      </Box>
    </Container>
  )
}

export default WriteStandard

const Container = styled.section`
  padding: 0.5rem 2rem 2.4rem 2rem;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${(props) => props.theme.pink300};
  border: 0px;
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;
`

const Header = styled.div`
  display: flex;
`
const HeartPuzzleImg = styled.img`
  width: 100px;
  margin-right: 0.2rem;
`

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
`

const Title = styled.h3`
  ${(props) => props.theme.fontSize.h3_b}
  color: ${(props) => props.theme.pink700};
`

const Subtitle = styled.p`
  ${(props) => props.theme.fontSize.b2}
  margin-top: 0.8rem;
`
