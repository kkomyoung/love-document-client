import React from 'react'
import Header from '../../components/header/Header'
import {
  SubTitle,
  TextArea,
  TextDesc,
  Title,
} from '../../components/texts/Texts'
import styled from 'styled-components'
import { ReactComponent as IconLoveLetter } from '../../assets/icon_love_letter_36.svg'
import ShareResearchBox from '../../components/research/ShareResearchBox'
import AnswerItem from '../../components/answer/AnswerItem'
import WriteStandard from './WriteStandard'
import useToastPopup from '../../hooks/useToastPopup'

const answers = [
  {
    id: 1,
    nickname: '영애',
    age: 26,
    address: '서울 강남구',
    match: 70,
    date: '2월 7일',
  },
  {
    id: 2,
    nickname: '본휘',
    age: 29,
    address: '서울 강남구',
    match: null,
    date: '2월 8일',
  },
]

function ResearchReady() {
  const { ToastPopup, openToastPopup } = useToastPopup()
  const onDelete = (id) => {
    console.log(id)
  }

  const onCopyLink = () => {
    // TODO 링크 API로 받은 데이터로 변경해야 함. 아래는 예시용 링크
    navigator.clipboard
      .writeText(
        'https://emart.ssg.com/item/itemView.ssg?itemId=1000026477087&siteNo=6001&salestrNo=6005'
      )
      .then(() => {
        openToastPopup('설문지링크가 복사되었습니다.')
      })
  }

  return (
    <StyledMain>
      <Header title="질문지 준비 완료" btnBack btnHome />
      <StyledAirticle>
        <TextArea>
          <Title>질문지 준비 완료</Title>
          <TextDesc>
            상대에게 질문지를 보낼 준비가 완료되었어요
            <br />
            링크를 공유하고 답변을 요청해보세요
          </TextDesc>
        </TextArea>

        <StyledShareResearchSection>
          <ShareResearchBox onCopyLink={onCopyLink} />
        </StyledShareResearchSection>

        <WriteStandard />

        <StyledAnswersSection>
          <TextArea>
            <SubTitle>
              <i aria-hidden="true">
                <IconLoveLetter />
              </i>
              <span>도착한 답변</span>
            </SubTitle>
            <TextDesc>아직 도착한 답변이 없어요 :(</TextDesc>
          </TextArea>

          <AnswerList>
            {answers.map((answer) => (
              <AnswerItem key={answer.id} {...answer} onDelete={onDelete} />
            ))}
          </AnswerList>
        </StyledAnswersSection>
      </StyledAirticle>
      <ToastPopup />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
  padding-bottom: 2rem;
`

const StyledAirticle = styled.article``
const StyledShareResearchSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.8rem 2rem;

  & > div + div {
    margin-top: 3.3rem;
  }
`
const StyledAnswersSection = styled.section``

const AnswerList = styled.ul`
  margin-top: 2.8rem;
  padding: 0px 2rem;

  & > li + li {
    margin-top: 1.6rem;
  }
`

export default ResearchReady
