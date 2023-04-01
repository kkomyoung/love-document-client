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
import ShareResearch from './ShareResearch'
import WriteStandard from './WriteStandard'
import AnswerItem from '../../components/answer/AnswerItem'

const member = {
  name: '연서합',
  researchCnt: 4,
}

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
  const onDelete = (id) => {
    console.log(id)
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
        <ShareResearch {...member} />

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
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
  padding-bottom: 2rem;
`

const StyledAirticle = styled.article``
const StyledAnswersSection = styled.section``

const AnswerList = styled.ul`
  margin-top: 2.8rem;
  padding: 0px 2rem;

  & > li + li {
    margin-top: 1.6rem;
  }
`

export default ResearchReady
