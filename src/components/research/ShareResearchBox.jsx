import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as ImgDocument } from '../../assets/img_document.svg'
import { ButtonArea, KakaoButton, RoundButton } from '../buttons/Buttons'

function ShareResearchBox({ onCopyLink }) {
  const [userInfo, setUserInfo] = useState({
    nickname: '',
    questionCnt: 0,
    researchLink: '',
  })

  useEffect(() => {
    const nickname = localStorage.getItem('nickname')
    setUserInfo((prev) => ({ ...prev, nickname }))

    // TODO 질문 개수와 링크를 받아오는 API 처리
  }, [userInfo])

  return (
    <Box>
      <NicknameText>
        <span>{userInfo.nickname}</span>님의 연애서류
      </NicknameText>

      <QuestionCountText>
        <span>{userInfo.questionCnt}</span>개의 질문
      </QuestionCountText>

      <ImgDocumentBox>
        <ImgDocument />
      </ImgDocumentBox>

      <ButtonArea flex full>
        <RoundButton onClick={onCopyLink} text="링크복사" />
        <KakaoButton text="카톡공유" />
      </ButtonArea>
    </Box>
  )
}

export default ShareResearchBox

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${(props) => props.theme.gray100};
  border-radius: 8px;
  border: 0px;
`

const ImgDocumentBox = styled.div`
  display: flex;
  justify-content: center;
`

const NicknameText = styled.h3`
  ${(props) => props.theme.fontSize.h3_m}

  span {
    color: ${(props) => props.theme.pink700};
  }
`

const QuestionCountText = styled.p`
  ${(props) => props.theme.fontSize.b2}

  span {
    color: ${(props) => props.theme.blue700};
  }
`
