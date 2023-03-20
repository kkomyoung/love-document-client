import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { TextArea, TextDesc, Title } from '../components/texts/Texts'
import { ReactComponent as IconLetter } from '../assets/icon_letter.svg'
import DefaultInfo from '../components/question/DefaultInfo'
import QuestionContainer from '../components/question/QuestionContainer'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'

const data = {
  외모: {
    offset: 0,
    questions: [
      {
        id: 24,
        title: '키가 어떻게 되시나요?',
        type: 'INPUT',
      },
      {
        id: 105,
        title: '타투가 있으신가요?',
        type: 'YES-OR-NO',
        examples: [
          { id: 1, text: '괜찮아요' },
          { id: 2, text: '안돼요' },
        ],
      },
      {
        id: 36,
        title: '어떤 종교가 있으신가요?',
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

function AnswerPage() {
  return (
    <StyledMain>
      <Header title="답변하기" btnBack />
      <StyledAirticle>
        <TextArea>
          <Title>
            <i aria-hidden="true">
              <IconLetter />
            </i>
            답변하기
          </Title>
          <TextDesc>
            <span>솔직한 답변으로 나와 잘 맞는 사람을 찾아봐요</span>
          </TextDesc>
        </TextArea>

        <StyledSectionQuestion>
          <DefaultInfo />

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
          <RoundButton size="large" text="확인" />
        </ButtonArea>
      </StyledAirticle>
    </StyledMain>
  )
}

export default AnswerPage

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
`

const StyledAirticle = styled.article``

const StyledSectionQuestion = styled.section`
  margin-top: 2.8rem;
  padding: 0 2.4rem;

  & > div + div {
    margin-top: 2.8rem;
  }
`
