import React from 'react'
import styled from 'styled-components'

import DocumentImage from '../../assets/img_document.svg'
import { KakaoButton, RoundButton } from '../../components/buttons/Buttons'

function ShareResearch({ name, researchCnt }) {
  return (
    <Container>
      <Box>
        <Title>
          <span>{name}</span>님의 연애서류
        </Title>
        <Subtitle>
          <span>{researchCnt}</span>개의 질문
        </Subtitle>

        <DocumentImg src={DocumentImage} alt="document_image" />

        <ButtonArea>
          <RoundButton text="링크복사" />
          <KakaoButton>카톡공유</KakaoButton>
        </ButtonArea>
      </Box>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.8rem 2rem;

  & > div + div {
    margin-top: 3.3rem;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${(props) => props.theme.gray100};
  border-radius: 8px;
  border: 0px;
`

const Title = styled.h3`
  ${(props) => props.theme.fontSize.h3_m}

  span {
    color: ${(props) => props.theme.pink700};
  }
`

const Subtitle = styled.p`
  ${(props) => props.theme.fontSize.b2}

  span {
    color: ${(props) => props.theme.blue700};
  }
`

const DocumentImg = styled.img`
  width: 360px;
  height: 280px;
  margin: 0 auto;
`

const ButtonArea = styled.div`
  display: flex;

  button {
    flex: 1;
  }

  button + button {
    margin-left: 0.8rem;
  }
`

export default ShareResearch
