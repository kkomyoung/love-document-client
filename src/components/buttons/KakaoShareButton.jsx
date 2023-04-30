import React from 'react'
import { RoundButton } from './Buttons'
import { ReactComponent as IconKakaoLogo } from '../../assets/icon_logo_kakao.svg'

// TODO 주요 기능들 완성시켜놓고, 메타데이터 다듬기 (일단 링크 공유 기능만 완성)
const KakaoShareButton = ({ questionLink }) => {
  const shareQuestion = () => {
    if (window.Kakao) {
      const kakao = window.Kakao
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_API_KEY)
      }

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '두근-두근, 연애서류합',
          description:
            '소개팅 상대가 내 기준에 얼마나 부합할까? 내 연애 서류를 만들고 답변을 받아봐요',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/love-document.appspot.com/o/love-document-accept.png?alt=media&token=7c6e16e4-b7b2-4b7b-8793-f07751f6d60e',
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
