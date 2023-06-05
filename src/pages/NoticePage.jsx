import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import changeBgColor from '../utils/changeBgColor'

function NoticePage() {
  const params = useParams()

  changeBgColor(params.isAccept === 'accpet' ? '#79c7ff' : '#181818')

  return (
    <StyledMain>
      <StyledAirticle>
        <Box>
          <Row>
            <TitleText></TitleText>

            <SubtitleText></SubtitleText>
          </Row>

          <Row>
            <Col></Col>

            <Col></Col>
          </Row>
        </Box>
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

const Box = styled.div`
  display: flex;
`

const Row = styled.div``

const Col = styled.div``

const TitleText = styled.h1``

const SubtitleText = styled.h2``

// const LoveDocumentText = styled.h3``

export default NoticePage
