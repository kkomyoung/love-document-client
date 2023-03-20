import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { Link } from 'react-router-dom'
import { TextArea, TextDesc, Title } from '../components/texts/Texts'
import QuestionContainer from '../components/question/QuestionContainer'
import { RoundButton, ButtonArea } from '../components/buttons/Buttons'

const data = {
  외모: {
    offset: 0,
    questions: [
      {
        id: 24,
        title: '키는 어느정도를 선호하세요?',
        type: 'RANGE',
      },
      {
        id: 105,
        title: '타투 어때요?',
        type: 'YES-OR-NO',
        examples: [
          { id: 1, text: '괜찮아요' },
          { id: 2, text: '안돼요' },
        ],
      },
      {
        id: 36,
        title: '어떤 종교가 있었으면 하나요?',
        type: 'MULTIPLE-CHOCIE',
        isMultiChoice: true,
        examples: [
          { id: 22, text: '무교' },
          { id: 23, text: '기독교' },
          { id: 24, text: '천주교' },
          { id: 25, text: '불교' },
          { id: 26, text: '기타' },
        ],
      },
      {
        id: 24,
        title: '스킨십 선호가 어땠으면 하나요?',
        type: 'SCORE',
        positiveText: '스킨십 좋아해요',
        negativeText: '좋아하지 않아요',
      },
    ],
  },
  가치관: {
    offset: 4,
    questions: [
      {
        id: 24,
        title: '키는 어느정도를 선호하세요?',
        type: 'RANGE',
      },
      {
        id: 105,
        title: '타투 어때요?',
        type: 'YES-OR-NO',
        examples: [
          { id: 1, text: '괜찮아요' },
          { id: 2, text: '안돼요' },
        ],
      },
      {
        id: 36,
        title: '어떤 종교가 있었으면 하나요?',
        type: 'MULTIPLE-CHOCIE',
        isMultiChoice: true,
        examples: [
          { id: 22, text: '무교' },
          { id: 23, text: '기독교' },
          { id: 24, text: '천주교' },
          { id: 25, text: '불교' },
          { id: 26, text: '기타' },
        ],
      },
      {
        id: 24,
        title: '스킨십 선호가 어땠으면 하나요?',
        type: 'SCORE',
        positiveText: '스킨십 좋아해요',
        negativeText: '좋아하지 않아요',
      },
    ],
  },
}

function StandardPage() {
  return (
    <StyledMain>
      <Header title="내 기준 작성하기" btnBack />
      <StyledAirticle>
        <TextArea>
          <Title>내 기준 작성하기</Title>
          <TextDesc>
            <span>내 애인후보.. 이것만큼은.. 절대 지켜!!</span>
            <br />
            <span>상대방에게 바라는 조건을 작성해주세요</span>
          </TextDesc>
        </TextArea>

        <StyledSectionQuestion>
          {data &&
            Object.keys(data).map((category) => (
              <QuestionContainer
                key={category}
                category={category}
                questions={data[category].questions}
                offset={data[category].offset}
              />
            ))}
        </StyledSectionQuestion>

        <ButtonArea margin="10rem 0rem 0rem 0rem">
          <RoundButton
            as={Link}
            to="/research/standard/complete"
            size="large"
            text="확인"
          />
        </ButtonArea>
      </StyledAirticle>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
`

const StyledAirticle = styled.article`
  padding: 0 2.4rem;
`

const StyledSectionQuestion = styled.section`
  margin-top: 2.8rem;

  & > div + div {
    margin-top: 2.8rem;
  }
`

export default StandardPage
