import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { Link } from 'react-router-dom'
import { TextArea, TextDesc, Title } from '../components/texts/Texts'
import QuestionsContainer from '../components/question/QuestionsContainer'
import { RoundButton, ButtonArea } from '../components/buttons/Buttons'
import { useQuery } from 'react-query'
import { getQuestions } from '../apis/question'
import { useRecoilValue } from 'recoil'
import { answersAtom } from '../utils/atoms'

function StandardPage() {
  const answers = useRecoilValue(answersAtom)
  let offset = 1

  const { data: categoryQuestions } = useQuery('questions', getQuestions, {
    refetchOnWindowFocus: false,
  })

  const onConfirmButtonClick = () => {
    console.log(answers)
  }

  const getOffset = (questionLength) => {
    offset += questionLength // 카테고리별로 question list 의 길이를 저장. 다음 카테고리 question 시작번호에 쓰임
    return offset - questionLength // 현재 카테고리의 question 시작 번호 반환
  }

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
                  offset={getOffset(item.categoryItemInfoList.length)}
                />
              ))}
          </CategoryQuestionList>
        </StyledSectionQuestion>

        <ButtonArea margin="10rem 0rem 0rem 0rem">
          <RoundButton
            as={Link}
            size="large"
            text="확인"
            onClick={onConfirmButtonClick}
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
