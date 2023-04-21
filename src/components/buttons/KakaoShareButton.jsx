import React from 'react'
import { RoundButton } from './Buttons'
import { ReactComponent as IconKakaoLogo } from '../../assets/icon_logo_kakao.svg'

// TODO 주요 기능들 완성시켜놓고, 메타데이터 다듬기 (일단 링크 공유 기능만 완성)
const KakaoShareButton = ({ questionLink }) => {
  const shareQuestion = () => {
    if (window.Kakao) {
      const kakao = window.Kakao
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_SHARE_LINK_API_KEY)
      }

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '연애서류합',
          description: '설명',
          imageUrl: '이미지 url',
          link: {
            mobileWebUrl: questionLink,
            webUrl: questionLink,
          },
        },
      })
    } else {
      console.err('Kakao SDK is not loaded')
    }
  }

  return (
    <RoundButton color="kakao" onClick={shareQuestion}>
      <i aria-hidden="true">
        <IconKakaoLogo />
      </i>
      <span>카톡공유</span>
    </RoundButton>
  )
}

export default KakaoShareButton
