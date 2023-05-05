/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { Link, useNavigate } from 'react-router-dom'
import { TextArea, TextDesc, Title } from '../components/texts/Texts'
import QuestionsContainer from '../components/question/QuestionsContainer'
import { RoundButton, ButtonArea } from '../components/buttons/Buttons'
import { useQuery, useMutation } from 'react-query'
import { getQuestionsOfQuestioner } from '../apis/question'
import { useRecoilState } from 'recoil'
import { answerAtom } from '../utils/atoms'
import useToastPopup from '../hooks/useToastPopup'
import { postIdeal } from '../apis'
import useQuestion from '../hooks/useQuestion'
import Loading from '../components/loading/Loading'

function StandardEditPage() {
  const navigate = useNavigate()
  const { openToastPopup, ToastPopup } = useToastPopup()
  const { data: categoryQuestions, isLoading: isGetQuestionsLoading } =
    useQuery('quetioner-questions-edit', getQuestionsOfQuestioner, {
      refetchOnWindowFocus: false,
    })
  const { getQuestionNumberOffset, isNotAllAnswered, isSameAnswered } =
    useQuestion(0)
  const [answer, setAnswer] = useRecoilState(answerAtom)
  const [answerds, setAnswereds] = useState([])

  useEffect(() => {
    if (!categoryQuestions) return

    const answereds = []
    categoryQuestions.forEach((categoryQuetion) => {
      categoryQuetion.categoryItemInfoList.forEach((answered) => {
        answereds.push({
          categoryItemId: answered.id,
          questionType: answered.type,
          rangeList: answered.rangeList,
          yn: answered.yn,
          score: answered.score,
          choiceIdList: answered.choiceIdList,
        })
      })
    })

    setAnswereds(answereds) // 기존 답안 목록 저장
    setAnswer((prev) => ({ ...prev, answeredList: answereds })) // 기존 답안 atom에 저장
  }, [categoryQuestions])

  const { mutate: writeIdeal, isLoading: isWriteIdealLoading } = useMutation(
    postIdeal,
    {
      onSuccess: (data) => {
        navigate('/research/standard/complete')
      },
      onError: () => {
        openToastPopup('기준을 수정하는데 실패했어요')
      },
    }
  )

  const onConfirmButtonClick = () => {
    if (isSameAnswered(answerds, answer.answerList)) {
      openToastPopup('기준이 이전과 같아요')
    }
  }

  return (
    <StyledMain>
      {(isWriteIdealLoading || isGetQuestionsLoading) && (
        <Loading
          text={isGetQuestionsLoading ? '질문지 불러오는 중' : '답안 저장 중'}
        />
      )}
      <Header title="내 기준 편집" btnHome />
      <StyledAirticle>
        <TextArea>
          <Title>내 기준 편집</Title>
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
                  category={item}
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
            text="저장"
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

export default StandardEditPage
