import React from 'react'
import Header from '../../components/header/Header'
import { TextArea, Title } from '../../components/texts/Texts'
import { ReactComponent as IconAirplane } from '../../assets/icon_airplane.svg'
import styled from 'styled-components'
import MyCategories from './MyCategories'
import MyStandards from './MyStandards'
import ShareResearchBox from '../../components/research/ShareResearchBox'
import useToastPopup from '../../hooks/useToastPopup'

const HomeRearch = () => {
  const { openToastPopup, ToastPopup } = useToastPopup()

  const onCopyLink = () => {
    // TODO 링크 API로 받은 데이터로 변경해야 함. 아래는 예시용 링크
    openToastPopup('설문지링크가 복사되었습니다.')
  }

  return (
    <StyledMain>
      <Header title="질문지 준비 완료" btnBack btnHome />
      <article>
        <TextArea>
          <Title>
            <i aria-hidden="true">
              <IconAirplane />
            </i>
            내 질문지
          </Title>
        </TextArea>
        <StyledResearchBoxSection>
          <ShareResearchBox onCopyLink={onCopyLink} />
        </StyledResearchBoxSection>

        <MyCategories />
        <MyStandards />
      </article>
      <ToastPopup />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
  padding-bottom: 10rem;
`

const StyledResearchBoxSection = styled.section`
  padding: 0 2rem;
  margin-top: 2.4rem;
`

export default HomeRearch
