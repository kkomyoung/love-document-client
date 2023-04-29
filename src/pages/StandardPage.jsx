import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { Link, useNavigate } from 'react-router-dom'
import { TextArea, TextDesc, Title } from '../components/texts/Texts'
import QuestionsContainer from '../components/question/QuestionsContainer'
import { RoundButton, ButtonArea } from '../components/buttons/Buttons'
import { useQuery, useMutation } from 'react-query'
import { getQuestionsOfQuestioner } from '../apis/question'
import { useRecoilValue } from 'recoil'
import { answersAtom } from '../utils/atoms'
import useToastPopup from '../hooks/useToastPopup'
import { postIdeals } from '../apis'
import useQuestionNumber from '../hooks/useQuestionNumber'

function StandardPage() {
  const { data: categoryQuestions } = useQuery(
    'questions',
    getQuestionsOfQuestioner,
    {
      refetchOnWindowFocus: false,
    }
  )
  const { totalQuestionLength, getQuestionNumberOffset } = useQuestionNumber(0)
  const answers = useRecoilValue(answersAtom)
  const { openToastPopup, ToastPopup } = useToastPopup()
  const navigate = useNavigate()

  const { mutate: writeIdeals, isLoading } = useMutation(postIdeals, {
    onSuccess: (data) => {
      console.log(data)
      navigate('/research/standard/complete')
    },
    onError: () => {
      openToastPopup('')
    },
  })

  const onConfirmButtonClick = () => {
    if (isLoading) return
    if (!categoryQuestions && !answers) return

    if (totalQuestionLength !== answers.length) {
      openToastPopup('아직 응답하지 않은 항목이 있어요.')
    }

    console.log(answers)
    writeIdeals({ idealList: answers })
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
                  offset={getQuestionNumberOffset(
                    item.categoryItemInfoList.length
                  )}
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
      <ToastPopup />
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
