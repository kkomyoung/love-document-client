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
            <p>
              두근 - 두근 <strong>연애서류합</strong>
            </p>
            {params.isAccept === 'accept' ? (
              <figure className="img-accept">
                <ImgHeartPuzzle />
              </figure>
            ) : (
              <figure className="img-broken">
                <ImgBrokenHeartPuzzle />
              </figure>
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
  position: relative;
  height: 100vh;
  max-height: 100%;
  display: flex;
  align-items: center;
`

const StyledAirticle = styled.article`
  flex: 1;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2.4rem;
`

const TitleText = styled.h1`
  ${(props) => props.theme.fontSize.h1}
  color: ${(props) => props.theme.white};
  white-space: pre-wrap;
`

const SubtitleText = styled.h4`
  margin-top: 1rem;
  ${(props) => props.theme.fontSize.h4_sb}
  color: ${(props) => (props.isAccept ? '#FFFFC3' : props.theme.pink400)};
`

const LogoRow = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  p {
    position: absolute;
    bottom: 2.3rem;
    left: 2.4rem;
    color: ${(props) => props.theme.white};
    font-size: 1rem;
    font-weight: 400;
    z-index: 1;

    strong {
      display: block;
      font-size: 1.7rem;
      margin-top: 0.2rem;
      font-weight: 700;
      color: ${(props) => props.theme.white};
    }
  }

  figure {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    svg {
      display: inline-block;
      width: 90%;
    }
  }

  .img-accept svg {
    margin-right: -2.5rem;
    margin-bottom: -2.3rem;
  }

  .img-broken svg {
    margin-top: -1.5rem;
    margin-right: -2rem;
    margin-bottom: -5.2rem;
  }

  @media (max-width: 499px) {
    .img-broken svg {
      margin-right: -1.5rem;
      margin-bottom: -4.8rem;
    }
  }
`

export default NoticePage
