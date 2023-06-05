/* eslint-disable multiline-ternary */
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import changeBgColor from '../utils/changeBgColor'
import { ReactComponent as ImgHeartPuzzle } from '../assets/img_heart_puzzle_large.svg'
import { ReactComponent as ImgBrokenHeartPuzzle } from '../assets/img_broken_heart_puzzle_large.svg'
import { RoundButton, ButtonArea } from '../components/buttons/Buttons'

function NoticePage() {
  const params = useParams()

  changeBgColor(params.isAccept === 'accept' ? '#79c7ff' : '#181818')

  return (
    <StyledMain>
      <StyledAirticle>
        <Box>
          <TitleRow>
            <TitleText>
              {params.isAccept === 'accept'
                ? '짝짝짝!\n소개팅 할게요!'
                : '다른 좋은\n인연이 있겠죠'}
            </TitleText>

            <SubtitleText isAccept={params.isAccept === 'accept'}>
              {params.isAccept === 'accept'
                ? '소개팅을 승낙하셨습니다'
                : '아쉽지만 소개팅을 거절하셨습니다'}
            </SubtitleText>
          </TitleRow>

          <LogoRow>
            <LoveDocumentText>
              <p>두근 - 두근</p>연애서류합
            </LoveDocumentText>
            {params.isAccept === 'accept' ? (
              <ImgHeartPuzzle />
            ) : (
              <ImgBrokenHeartPuzzle />
            )}
          </LogoRow>

          <ButtonArea margin="10rem 0 0 0">
            <RoundButton
              as={Link}
              to="/"
              text="서비스 보러가기"
              color="white"
              border="true"
            />
          </ButtonArea>
        </Box>
      </StyledAirticle>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;

  @media (max-width: 499px) {
    min-height: calc(100vh - 6rem);
  }
`

const StyledAirticle = styled.article`
  padding: 0 2.4rem;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleRow = styled.div`
  display: flex;
  flex-direction: column;
`

const LogoRow = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    height: fit-content;
  }
`

const TitleText = styled.h1`
  ${(props) => props.theme.fontSize.h1}
  color: ${(props) => props.theme.white};
  white-space: pre-wrap;
  margin-top: 10rem;
`

const SubtitleText = styled.h4`
  margin-top: 1rem;
  ${(props) => props.theme.fontSize.h4_sb}
  color: ${(props) => (props.isAccept ? '#FFFFC3' : props.theme.pink400)};
`

const LoveDocumentText = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: end;
  font-size: 1.7rem;
  font-weight: 700;
  color: ${(props) => props.theme.white};

  p {
    font-size: 1rem;
    font-weight: 400;
  }
`

export default NoticePage
