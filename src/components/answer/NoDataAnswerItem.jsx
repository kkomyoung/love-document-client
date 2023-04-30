import React from 'react'
import styled from 'styled-components'

function NoDataAnswerItem() {
  return (
    <Item>
      <Box>
        <Col>
          <NicknameText>
            <NicknamePinkText>연서합</NicknamePinkText>님의 답변
          </NicknameText>

          <InfoParagraph>
            <InfoText>28세</InfoText>
            <VerticalLine />
            <InfoText>서울 강남구</InfoText>
          </InfoParagraph>
        </Col>

        <Col alignRight>
          <MatchText>??% 일치</MatchText>
          <InfoText>2월 9일</InfoText>
        </Col>
      </Box>
    </Item>
  )
}

export default NoDataAnswerItem

const Item = styled.li`
  display: flex;
  position: relative;
`

const Box = styled.div`
  display: flex;
  width: 100%;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.gray100};
  border: 1px solid ${(props) => props.theme.gray300};
  border-radius: 8px;
  padding: 2.4rem 2rem;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  align-items: ${(props) => (props.alignRight ? 'end' : 'start')};
`

const NicknameText = styled.span`
  ${(props) => props.theme.fontSize.h4_m}
  color: ${(props) => props.theme.gray500};
`

const NicknamePinkText = styled.span`
  color: ${(props) => props.theme.gray400};
`

const InfoParagraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`

const InfoText = styled.span`
  vertical-align: middle;
  ${(props) => props.theme.fontSize.b2}
  color: ${(props) => props.theme.gray400};
`

const VerticalLine = styled.span`
  height: 0.8rem;
  border-left: 1px solid ${(props) => props.theme.gray300};
`

const MatchText = styled.span`
  ${(props) => props.theme.fontSize.h4_sb}
  color: ${(props) => props.theme.gray400};
`
