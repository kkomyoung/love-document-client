import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import { TextArea, Title, TextDesc } from '../components/texts/Texts'
import { ReactComponent as IconLetter } from '../assets/icon_letter.svg'
import AnswerItem from '../components/answer/AnswerItem'
import NoDataAnswerItem from '../components/answer/NoDataAnswerItem'
import { useMutation, useQuery } from 'react-query'
import { deleteAnswer, getUsersAnswers } from '../apis'
import useToastPopup from '../hooks/useToastPopup'
import Loading from '../components/loading/Loading'

function AnswersPage() {
  const { data, refetch } = useQuery('usersAnswersList', getUsersAnswers)
  const dataLength = data?.length || 0
  const { openToastPopup, ToastPopup } = useToastPopup()

  const { mutate: removeAnswer, isLoading } = useMutation(deleteAnswer, {
    onSuccess: (data) => {
      refetch()
    },
    onError: () => {
      openToastPopup('답변삭제를 실패했어요')
    },
  })

  const onDelete = (id) => removeAnswer(id)

  return (
    <StyledMain>
      {isLoading && <Loading text="답변 삭제 중" />}
      <Header title="도착한 답변" btnBack></Header>
      <StyledAirticle>
        <TextArea>
          <Title>
            <i aria-hidden="true">
              <IconLetter />
            </i>
            도착한 답변
          </Title>
          {dataLength === 0 && (
            <TextDesc>아직 도착한 답변이 없어요 :(</TextDesc>
          )}
        </TextArea>

        <StyledAnswersSection>
          <AnswerList>
            {dataLength === 0 && <NoDataAnswerItem />}
            {data &&
              data.map((answer) => (
                <AnswerItem
                  key={answer.answerId}
                  {...answer}
                  onDelete={onDelete}
                />
              ))}
          </AnswerList>
        </StyledAnswersSection>
      </StyledAirticle>
      <ToastPopup />
    </StyledMain>
  )
}

export default AnswersPage

const StyledMain = styled.main`
  padding-bottom: 4.8rem;
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
