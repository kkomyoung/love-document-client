import React, { useRef } from 'react'
import styled from 'styled-components'

function AnswerItem({ nickname, age, address, match, date }) {
  const ref = useRef()
  let downX

  const onPointerMove = (e) => {
    const newX = e.clientX

    if (newX - downX < -30) {
      ref.current.style.transform = 'translate(-55px)'
      setTimeout(() => {
        if (ref.current) ref.current.style.transform = 'translate(0px)'
      }, 5000)
    } else ref.current.style.transform = 'translate(0px)'
  }

  const onPointerDown = (e) => {
    downX = e.clientX
    ref.current.addEventListener('pointermove', onPointerMove)
  }

  const onPointerUp = () =>
    ref.current.removeEventListener('pointermove', onPointerMove)

  return (
    <Item>
      <Box onPointerDown={onPointerDown} onPointerUp={onPointerUp} ref={ref}>
        <Col>
          <NicknameText>
            <NicknamePinkText>{nickname}</NicknamePinkText>님의 답변
          </NicknameText>

          <InfoParagraph>
            <InfoText>{age}세</InfoText>
            <VerticalLine />
            <InfoText>{address}</InfoText>
          </InfoParagraph>
        </Col>

        <Col alignRight>
          <MatchText>{match === null ? '??' : match}% 일치</MatchText>
          <InfoText>{date}</InfoText>
        </Col>
      </Box>
      <DeleteButton>D</DeleteButton>
    </Item>
  )
}

export default AnswerItem

const Item = styled.li`
  display: flex;
  position: relative;

  div {
  }
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
  user-select: none;
  transition: transform 800ms;
  cursor: pointer;
`

const DeleteButton = styled.button`
  position: absolute;
  right: 0;
  height: 99%;
  margin: 0.5px 1px 0.5px 0px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${(props) => props.theme.pink700};
  border: none;
  min-width: 80px;
  cursor: pointer;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  align-items: ${(props) => (props.alignRight ? 'end' : 'start')};
`

const NicknameText = styled.span`
  ${(props) => props.theme.fontSize.h4_m}
`

const NicknamePinkText = styled.span`
  color: ${(props) => props.theme.pink700};
`

const InfoParagraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.gray600};
  gap: 0.8rem;
`

const InfoText = styled.span`
  vertical-align: middle;
  ${(props) => props.theme.fontSize.b2}
  color: ${(props) => props.theme.gray600};
`

const VerticalLine = styled.span`
  height: 0.8rem;
  border-left: 1px solid ${(props) => props.theme.gray400};
`

const MatchText = styled.span`
  ${(props) => props.theme.fontSize.h4_sb}
  color: ${(props) => props.theme.blue500};
`
