import React, { useEffect } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import styled from 'styled-components'
import { ReactComponent as ImgDocument } from '../../assets/img_document.svg'
import { ButtonArea, KakaoShareButton, RoundButton } from '../buttons/Buttons'
import useUser from '../../hooks/useUser'

function ShareResearchBox({ onCopyLink }) {
  const { user, isLoading } = useUser()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  return (
    <Box>
      {!isLoading && (
        <>
          <NicknameText>
            <span>{user.nickname}</span>님의 연애서류
          </NicknameText>

          <QuestionCountText>
            <span>{user.categoryNum}</span>개의 질문
          </QuestionCountText>

          <ImgDocumentBox>
            <ImgDocument />
          </ImgDocumentBox>

          <ButtonArea flex full>
            <CopyToClipboard
              text={`http://www.love-document.com/research/${user.linkId}/answer`}
              onCopy={onCopyLink}
            >
              <RoundButton text="링크복사" />
            </CopyToClipboard>

            <KakaoShareButton
              questionLink={`http://www.love-document.com/research/${user.linkId}/answer`}
            />
          </ButtonArea>
        </>
      )}
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
