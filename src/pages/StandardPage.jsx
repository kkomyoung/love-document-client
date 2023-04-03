import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { Link } from 'react-router-dom'
import { TextArea, TextDesc, Title } from '../components/texts/Texts'
import QuestionsContainer from '../components/question/QuestionsContainer'
import { RoundButton, ButtonArea } from '../components/buttons/Buttons'
import { useQuery } from 'react-query'
import { getQuestions } from '../apis/question'

// const data = {
//   외모: {
//     offset: 0,
//     questions: [
//       {
//         id: 24,
//         title: '키는 어느정도를 선호하세요?',
//         type: 'RANGE',
//       },
//       {
//         id: 105,
//         title: '타투 어때요?',
//         type: 'YES-OR-NO',
//         examples: [
//           { id: 1, text: '괜찮아요' },
//           { id: 2, text: '안돼요' },
//         ],
//       },
//       {
//         id: 36,
//         title: '어떤 종교가 있었으면 하나요?',
//         type: 'MULTIPLE-CHOCIE',
//         isMultiChoice: true,
//         examples: [
//           { id: 22, text: '무교' },
//           { id: 23, text: '기독교' },
//           { id: 24, text: '천주교' },
//           { id: 25, text: '불교' },
//           { id: 26, text: '기타' },
//         ],
//       },
//       {
//         id: 24,
//         title: '스킨십 선호가 어땠으면 하나요?',
//         type: 'SCORE',
//         positiveText: '스킨십 좋아해요',
//         negativeText: '좋아하지 않아요',
//       },
//     ],
//   },
//   가치관: {
//     offset: 4,
//     questions: [
//       {
//         id: 24,
//         title: '키는 어느정도를 선호하세요?',
//         type: 'RANGE',
//       },
//       {
//         id: 105,
//         title: '타투 어때요?',
//         type: 'YES-OR-NO',
//         examples: [
//           { id: 1, text: '괜찮아요' },
//           { id: 2, text: '안돼요' },
//         ],
//       },
//       {
//         id: 36,
//         title: '어떤 종교가 있었으면 하나요?',
//         type: 'MULTIPLE-CHOCIE',
//         isMultiChoice: true,
//         examples: [
//           { id: 22, text: '무교' },
//           { id: 23, text: '기독교' },
//           { id: 24, text: '천주교' },
//           { id: 25, text: '불교' },
//           { id: 26, text: '기타' },
//         ],
//       },
//       {
//         id: 24,
//         title: '스킨십 선호가 어땠으면 하나요?',
//         type: 'SCORE',
//         positiveText: '스킨십 좋아해요',
//         negativeText: '좋아하지 않아요',
//       },
//     ],
//   },
// }

// eslint-disable-next-line no-unused-vars
const data = [
  {
    categoryTitle: '가치관',
    categoryItemInfoList: [
      {
        id: 7,
        multiple: 'Y',
        type: 'CHOICE',
        question: '어떤 종교가 있었으면 하나요?',
        negativeLabel: null,
        positiveLabel: null,
        exampleList: [
          {
            id: 9,
            content: '천주교',
          },
          {
            id: 10,
            content: '무교',
          },
          {
            id: 11,
            content: '기독교',
          },
          {
            id: 12,
            content: '불교',
          },
          {
            id: 19,
            content: '기타',
          },
        ],
        choiceIdList: [],
        rangeNumList: [],
        scoreNumList: [],
        ynBoolList: [],
      },
      {
        id: 8,
        multiple: 'N',
        type: 'YN',
        question: '상대방이 결혼 생각 있었으면 하나요?',
        negativeLabel: '결혼 생각 없는',
        positiveLabel: '결혼 생각 있는',
        exampleList: [],
        choiceIdList: [],
        rangeNumList: [],
        scoreNumList: [],
        ynBoolList: [],
      },
      {
        id: 9,
        multiple: 'N',
        type: 'YN',
        question: '상대방이 아이 생각이 있었으면 하나요?',
        negativeLabel: '아이 생각 없는',
        positiveLabel: '아이 생각 있는',
        exampleList: [],
        choiceIdList: [],
        rangeNumList: [],
        scoreNumList: [],
        ynBoolList: [],
      },
      {
        id: 10,
        multiple: 'N',
        type: 'SCORE',
        question: '정치성향이 어땠으면 하나요?',
        negativeLabel: '보수',
        positiveLabel: '진보',
        exampleList: [],
        choiceIdList: [],
        rangeNumList: [],
        scoreNumList: [],
        ynBoolList: [],
      },
      {
        id: 11,
        multiple: 'N',
        type: 'SCORE',
        question: '술을 즐겼으면 하나요?',
        negativeLabel: '술을 싫어하는',
        positiveLabel: '술을 좋아하는',
        exampleList: [],
        choiceIdList: [],
        rangeNumList: [],
        scoreNumList: [],
        ynBoolList: [],
      },
      {
        id: 12,
        multiple: 'N',
        type: 'YN',
        question: '흡연 어떠세요?',
        negativeLabel: '안돼요',
        positiveLabel: '괜찮아요',
        exampleList: [],
        choiceIdList: [],
        rangeNumList: [],
        scoreNumList: [],
        ynBoolList: [],
      },
    ],
  },
  {
    categoryTitle: '외모',
    categoryItemInfoList: [
      {
        id: 1,
        multiple: 'N',
        type: 'RANGE',
        question: '만나고 싶은 상대방의 키는?',
        negativeLabel: null,
        positiveLabel: null,
        exampleList: [],
        choiceIdList: [],
        rangeNumList: [],
        scoreNumList: [],
        ynBoolList: [],
      },
      {
        id: 2,
        multiple: 'Y',
        type: 'CHOICE',
        question: '만나고 싶은 상대방의 체형은? (복수선택 가능)',
        negativeLabel: null,
        positiveLabel: null,
        exampleList: [
          {
            id: 1,
            content: '마름',
          },
          {
            id: 2,
            content: '날씬',
          },
          {
            id: 3,
            content: '보통',
          },
          {
            id: 4,
            content: '통통',
          },
          {
            id: 5,
            content: '뚱뚱',
          },
        ],
        choiceIdList: [],
        rangeNumList: [],
        scoreNumList: [],
        ynBoolList: [],
      },
      {
        id: 3,
        multiple: 'Y',
        type: 'CHOICE',
        question: '어떤 눈을 좋아하세요? (복수선택 가능)',
        negativeLabel: null,
        positiveLabel: null,
        exampleList: [
          {
            id: 6,
            content: '무쌍',
          },
          {
            id: 7,
            content: '속쌍',
          },
          {
            id: 8,
            content: '겉쌍',
          },
        ],
        choiceIdList: [],
        rangeNumList: [],
        scoreNumList: [],
        ynBoolList: [],
      },
      {
        id: 4,
        multiple: 'N',
        type: 'SCORE',
        question: '어떤 피부빛을 좋아하세요?',
        negativeLabel: '구릿빛',
        positiveLabel: '우윳빛',
        exampleList: [],
        choiceIdList: [],
        rangeNumList: [],
        scoreNumList: [],
        ynBoolList: [],
      },
      {
        id: 5,
        multiple: 'N',
        type: 'YN',
        question: '안경 쓴 애인 어떠세요?',
        negativeLabel: '싫어요',
        positiveLabel: '좋아요',
        exampleList: [],
        choiceIdList: [],
        rangeNumList: [],
        scoreNumList: [],
        ynBoolList: [],
      },
      {
        id: 6,
        multiple: 'N',
        type: 'YN',
        question: '타투 한 애인 어떠세요?',
        negativeLabel: '안돼요',
        positiveLabel: '괜찮아요',
        exampleList: [],
        choiceIdList: [],
        rangeNumList: [],
        scoreNumList: [],
        ynBoolList: [],
      },
    ],
  },
]

function StandardPage() {
  const { data: categoryQuestions } = useQuery('questions', getQuestions)

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
          <CategoryQuestionList>
            {categoryQuestions &&
              categoryQuestions.map((item, index) => (
                <QuestionsContainer
                  key={index}
                  category={item.categoryTitle}
                  questions={item.categoryItemInfoList}
                  offset={
                    index === 0
                      ? 0
                      : categoryQuestions[index - 1].categoryItemInfoList.length
                  }
                />
              ))}
          </CategoryQuestionList>
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

const StyledAirticle = styled.article``

const StyledSectionQuestion = styled.section`
  margin-top: 2.8rem;
  padding: 0 2.4rem;
`

const CategoryQuestionList = styled.ul`
  & > li + li {
    margin-top: 2.8rem;
  }
`

export default StandardPage
