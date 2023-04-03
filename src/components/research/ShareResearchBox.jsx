import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as ImgDocument } from '../../assets/img_document.svg'
import { ButtonArea, KakaoButton, RoundButton } from '../buttons/Buttons'

function ShareResearchBox() {
  const [userInfo, setUserInfo] = useState({
    nickname: '',
    questionCnt: 0,
    researchLink: '',
  })

  useEffect(() => {
    const nickname = localStorage.getItem('nickname')
    setUserInfo((prev) => ({ ...prev, nickname }))

    // 질문 개수와 링크를 받아오는 API 처리
  }, [userInfo])

  const onClickCopyLink = () => {
    // 링크 API로 받은 데이터로 변경해야 함. 아래는 예시용 링크
    navigator.clipboard
      .writeText(
        'https://emart.ssg.com/item/itemView.ssg?itemId=1000026477087&siteNo=6001&salestrNo=6005'
      )
      .then(() => {
        alert('설문지링크가 복사되었습니다.')
      })
  }

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
        <RoundButton onClick={onClickCopyLink} text="링크복사" />
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
