import React, { useRef } from 'react'
import styled from 'styled-components'
import { ReactComponent as IconTrashCan } from '../../assets/icon_trash_can.svg'
import { ReactComponent as IconHeartMatch } from '../../assets/icon_heart_match.svg'
import { ReactComponent as IconHeartNotMatch } from '../../assets/icon_heart_notmatch.svg'
import { Link } from 'react-router-dom'

function AnswerItem({
  answerId,
  nickname,
  age,
  live,
  show,
  percentage,
  dateTime,
  onDelete,
}) {
  const ref = useRef()
  let downX

  const onPointerMove = (e) => {
    const newX = e.clientX

    if (newX - downX < -30) {
      ref.current.style.transform = 'translate(-80px)'
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
        <Col as={Link} to={`/home/answers/${answerId}`}>
          <NicknameText>
            <NicknamePinkText>{nickname}</NicknamePinkText>님의 답변
            <i aria-hidden="true">
              {show === 'Y' && percentage === 100 && <IconHeartMatch />}
              {show === 'Y' && percentage !== 100 && <IconHeartNotMatch />}
            </i>
          </NicknameText>

          <InfoParagraph>
            <InfoText>{age}세</InfoText>
            <VerticalLine />
            <InfoText>{live}</InfoText>
          </InfoParagraph>
        </Col>
        <Col alignRight>
          <MatchText>{show === 'N' ? '??' : percentage}% 일치</MatchText>
          <InfoText>
            {dateTime.substr(5, 2)}월 {dateTime.substr(8, 2)}일
          </InfoText>
        </Col>
      </Box>
      <DeleteButton onClick={() => onDelete(answerId)}>
        <IconTrashCan />
      </DeleteButton>
    </Item>
  )
}

export default AnswerItem
const Item = styled.li`
  display: flex;
  position: relative;
  background-color: ${(props) => props.theme.pink700};
  border-radius: 8px;
`

const Box = styled.div`
  width: 100%;
  z-index: 10;
  background-color: ${(props) => props.theme.gray100};
  border: 1px solid ${(props) => props.theme.gray300};
  border-radius: 8px;
  user-select: none;
  transition: transform 800ms;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 2rem;

  /* & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.4rem 2rem;
  } */
`

const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  height: 99%;
  margin: 0.5px 1px 0.5px 0px;
  border: none;
  min-width: 80px;
  cursor: pointer;/
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  align-items: ${(props) => (props.alignRight ? 'end' : 'start')};
`

const NicknameText = styled.span`
  ${(props) => props.theme.fontSize.h4_m}

  i {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
  }
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
