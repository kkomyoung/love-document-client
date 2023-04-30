import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { TextArea, TextDesc, Title } from '../components/texts/Texts'
import { ReactComponent as IconLetter } from '../assets/icon_letter.svg'
import QuestionsContainer from '../components/question/QuestionsContainer'
import { ButtonArea, RoundButton } from '../components/buttons/Buttons'
import { getQuestionsOfAnswerer } from '../apis/question'
import { useQuery } from 'react-query'
import useQuestionNumber from '../hooks/useQuestionNumber'
import { QUESTION_TYPE } from '../utils/constants'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { answerAtom } from '../utils/atoms'

const defaultCategoryQuestions = {
  categoryTitle: '기본 정보',
  categoryItemInfoList: [
    {
      id: 0,
      name: 'nickname',
      type: QUESTION_TYPE.INPUT,
      question: '닉네임을 입력해주세요',
      placeholder: '닉네임',
    },
    {
      id: 0,
      name: 'age',
      type: QUESTION_TYPE.INPUT,
      question: '나이가 어떻게 되시나요?',
      placeholder: '18',
    },
    {
      id: 0,
      name: 'live',
      type: QUESTION_TYPE.INPUT,
      question: '어느 지역에 사시나요?',
      placeholder: 'ex. 서울 성동구',
    },
    {
      id: 0,
      name: 'work',
      type: QUESTION_TYPE.INPUT,
      question: '무슨 일을 하시나요?',
      placeholder: 'ex. 시각디자인과 대학생',
    },
  ],
}

function AnswerPage() {
  const params = useParams()
  const answer = useRecoilValue(answerAtom)
  const { data: categoryQuestions } = useQuery(
    'questions',
    () => getQuestionsOfAnswerer(params.questionId),
    {
      refetchOnWindowFocus: false,
    }
  )
  const { getQuestionNumberOffset } = useQuestionNumber(0)

  const onSaveButtonClick = () => {
    console.log(answer)
  }

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
          <CategoryQuestionList>
            <QuestionsContainer
              key={0}
              category={defaultCategoryQuestions.categoryTitle}
              questions={defaultCategoryQuestions.categoryItemInfoList}
              offset={getQuestionNumberOffset(
                defaultCategoryQuestions.categoryItemInfoList.length
              )}
            />

            {categoryQuestions &&
              categoryQuestions.map((item, index) => (
                <QuestionsContainer
                  key={index}
                  category={item.categoryTitle}
                  questions={item.categoryItemInfoList}
                  offset={getQuestionNumberOffset(
                    item.categoryItemInfoList.length
                  )}
                />
              ))}
          </CategoryQuestionList>
        </StyledSectionQuestion>

        <ButtonArea margin="10rem 0rem 0rem 0rem">
          <RoundButton size="large" text="저장" onClick={onSaveButtonClick} />
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
`

const CategoryQuestionList = styled.ul`
  & > li + li {
    margin-top: 2.8rem;
  }
`
